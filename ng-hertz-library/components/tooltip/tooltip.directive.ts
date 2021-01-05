import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  Output,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { HzTooltipBaseDirective } from './tooltip-base/tooltip-base.directive';
import { ConnectionPositionPair, Overlay } from '@angular/cdk/overlay';
import { HzTooltipComponent } from './tooltip.component';
import { OverLayPlacement } from '@haizhi/ng-hertz/core/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Directive({
  selector: '[hz-tooltip]'
})
export class HzTooltipDirective extends HzTooltipBaseDirective {
  componentType = HzTooltipComponent;
  componentRef: ComponentRef<HzTooltipComponent>;
  @Input() hzTooltipType: 'default' | 'info' = 'default';
  @Input() hzTooltipShowArrow = true;
  @Input() hzTooltipWidth: string;
  @Input() hzTooltipMaxWidth: string;
  @Input('hzTooltipTitle') content: string | TemplateRef<void>;
  @Input('hzTooltipPlacement') placement: OverLayPlacement;
  @Input('hzTooltipTriggerOrigin') triggerOrigin: ElementRef;
  @Input('hzTooltipPositionOrigin') positionOrigin: ElementRef;
  @Input('hzTooltipTrigger') trigger: 'hover' | 'focus' | 'click' | null = 'hover';
  @Input('hzTooltipEnterDelayTime') enterDelayTime = 150;
  @Input('hzTooltipLeaveDelayTime') leaveDelayTime = 100;
  @Input('hzTooltipWithPositions') withPositions: ConnectionPositionPair[] = [];
  @Input('hzTooltipVisibleClass') visibleClass: string;
  @Input('hzTooltipVisible') hzVisible: boolean;
  @Output() hzTooltipVisibleChange = new EventEmitter<boolean>();
  constructor(
    overlay: Overlay,
    elementRef: ElementRef,
    renderer: Renderer2,
    hostView: ViewContainerRef,
    cfr: ComponentFactoryResolver,
    injector: Injector
  ) {
    super(overlay, elementRef, renderer, hostView, cfr, injector);
  }

  openOverlay() {
    if (this.overlayRef.hasAttached()) {
      return;
    }
    this.componentRef = this.overlayRef.attach(new ComponentPortal(this.componentType, this.hostView, this.injector, this.cfr));
    this.componentRef.instance.content = this.content;
    this.componentRef.instance.maxWidth = this.hzTooltipMaxWidth;
    this.componentRef.instance.width = this.hzTooltipWidth;
    this.componentRef.instance.type = this.hzTooltipType;
    this.componentRef.instance.showArrow = this.hzTooltipShowArrow;
  }
}
