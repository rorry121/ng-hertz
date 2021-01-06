import {
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  EventEmitter,
  Injector,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { ComponentType, ConnectionPositionPair, FlexibleConnectedPositionStrategy, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { fromEvent, merge, Subject } from 'rxjs';
import { debounceTime, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { getPlacementName, OverLayPlacement, OverlayPositionList, OverlayPositionMap } from '@haizhi/ng-hertz/core/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { HzTooltipBaseComponent } from './tooltip-base.component';

export abstract class HzTooltipBaseDirective implements OnInit, OnDestroy, AfterViewInit {
  content: string | TemplateRef<void>;
  trigger: 'hover' | 'focus' | 'click' | null = 'hover';
  enterDelayTime = 150;
  leaveDelayTime = 100;
  placement: OverLayPlacement = 'top';
  withPositions: ConnectionPositionPair[] = OverlayPositionList;
  visibleClass = '';
  set hzVisible(value: boolean) {
    if (value !== undefined) {
      this.hzVisibleChange.emit(value);
      if (value) {
        if (!this.overlayRef) {
          if (this.trigger === 'click') {
            this.generateOverlayRef(true);
          } else {
            this.generateOverlayRef();
          }
        }
        this.openOverlay();
        if (this.visibleClass) {
          this.renderer.addClass(this.elementRef.nativeElement, this.visibleClass);
        }
      } else {
        this.closeOverlay();
        if (this.visibleClass) {
          this.renderer.removeClass(this.elementRef.nativeElement, this.visibleClass);
        }
      }
    }
  }
  hzVisibleChange = new EventEmitter<boolean>();
  triggerOrigin: ElementRef = this.elementRef;
  positionOrigin: ElementRef = this.elementRef;

  componentRef: ComponentRef<HzTooltipBaseComponent>;
  componentType: ComponentType<HzTooltipBaseComponent>;
  positionStrategy: FlexibleConnectedPositionStrategy;
  destroy$ = new Subject<void>();
  overlayRef: OverlayRef;
  protected constructor(
    private overlay: Overlay,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    protected hostView: ViewContainerRef,
    protected cfr: ComponentFactoryResolver,
    protected injector: Injector
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.setPositionStrategy();
    this.registerTrigger();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * make positionStrategy for overlay references
   */
  setPositionStrategy() {
    this.positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.positionOrigin)
      .withPositions([OverlayPositionMap[this.placement], ...this.withPositions]);
    // subscribe overlayRef position changes
    this.positionStrategy.positionChanges.pipe(takeUntil(this.destroy$)).subscribe(pos => {
      this.componentRef.instance.updatePlacement(getPlacementName(pos));
    });
  }

  openOverlay() {
    if (this.overlayRef.hasAttached() || this.hzVisible === false) {
      return;
    }
    this.componentRef = this.overlayRef.attach(new ComponentPortal(this.componentType, this.hostView, this.injector, this.cfr));
    this.componentRef.instance.content = this.content;
  }

  closeOverlay() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.componentRef.instance.startCloseAnimation();
      this.componentRef.instance.afterCloseAnimation$.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.overlayRef.detach();
      });
    }
  }

  generateOverlayRef(hasBackdrop = false) {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
        backdropClass: 'cdk-overlay-transparent-backdrop',
        disposeOnNavigation: true,
        positionStrategy: this.positionStrategy,
        hasBackdrop
      });
      if (hasBackdrop) {
        this.overlayRef.backdropClick().subscribe(() => {
          this.overlayRef.detach();
        });
      }
      this.overlayRef
        .detachments()
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.hzVisible = false;
        });
    }
  }

  registerTrigger() {
    if (this.trigger === 'hover') {
      const originMouseenter$ = fromEvent(this.triggerOrigin.nativeElement, 'mouseenter').pipe(map(() => MouseEventEnum.OriginEnter));
      const originMouseleave$ = fromEvent(this.triggerOrigin.nativeElement, 'mouseleave').pipe(map(() => MouseEventEnum.OriginLeave));
      const overlayMouseenter$ = originMouseleave$.pipe(
        filter(() => !!this.overlayRef),
        switchMap(() => fromEvent(this.overlayRef.overlayElement, 'mouseenter')),
        map(() => MouseEventEnum.OverlayEnter)
      );
      const overlayMouseleave$ = overlayMouseenter$.pipe(
        switchMap(() => fromEvent(this.overlayRef.overlayElement, 'mouseleave')),
        map(() => MouseEventEnum.OverlayLeave)
      );

      merge(originMouseenter$, originMouseleave$)
        .pipe(
          debounceTime(this.enterDelayTime),
          filter(type => type === MouseEventEnum.OriginEnter),
          takeUntil(this.destroy$)
        )
        .subscribe(res => {
          this.generateOverlayRef();
          // this.openOverlay();
          this.hzVisible = true;
        });

      const leaveFromOrigin$ = merge(originMouseleave$, overlayMouseenter$).pipe(
        debounceTime(0),
        filter(type => type === MouseEventEnum.OriginLeave)
      );
      const leaveFromOverlay$ = merge(overlayMouseleave$, originMouseenter$).pipe(
        debounceTime(0),
        filter(type => type === MouseEventEnum.OverlayLeave)
      );
      merge(leaveFromOverlay$, leaveFromOrigin$)
        .pipe(debounceTime(this.leaveDelayTime), takeUntil(this.destroy$))
        .subscribe(() => {
          // this.closeOverlay();
          this.hzVisible = false;
        });
    } else if (this.trigger === 'click') {
      const click$ = fromEvent(this.triggerOrigin.nativeElement, 'click');
      click$.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.generateOverlayRef(true);
        this.hzVisible = !(this.overlayRef && this.overlayRef.hasAttached());
      });
    } else if (this.trigger === 'focus') {
      const focus$ = fromEvent(this.triggerOrigin.nativeElement, 'focus');
      const blur$ = fromEvent(this.triggerOrigin.nativeElement, 'blur');
      focus$.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.generateOverlayRef();
        this.hzVisible = true;
      });
      blur$.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.hzVisible = false;
      });
    }
  }
}

enum MouseEventEnum {
  OriginEnter,
  OriginLeave,
  OverlayLeave,
  OverlayEnter
}
