import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  TemplateRef,
  Input,
  Output,
  ContentChildren,
  EventEmitter,
  QueryList,
  ChangeDetectorRef,
  AfterViewInit,
  ViewChildren,
  ViewChild,
  ElementRef,
  OnDestroy,
  Renderer2
} from '@angular/core';
import { HzTabComponent } from './tab/tab.component';
import { Router, RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { fromEvent, merge, Subject } from 'rxjs';
import { debounceTime, startWith, takeUntil } from 'rxjs/operators';

type HzTabsType = 'normal' | 'dense' | 'dot' | 'large';

@Component({
  selector: 'hz-tabs',
  templateUrl: './tabs.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HzTabsComponent implements OnInit, AfterViewInit, OnDestroy {
  children: Array<HzTabsComponentInfo> = [];
  scrolling = false;
  transformX = 0;
  beyondWidth = 0;
  destroy$ = new Subject();
  sizeMap: Record<HzTabsType, 's' | 'm' | 'l'> = {
    dense: 's',
    dot: 's',
    normal: 'm',
    large: 'l'
  };
  tabScrollBtnWidth = 48;
  @Input() hzCurIndex = 0;
  @Input() hzTabsType: HzTabsType = 'normal';
  @Input() hzTabsWidth: string;
  @Input() hzTabsRouteMode = false;
  @Input() hzLinkExact = true;
  @Output() hzTabsChange = new EventEmitter<number>();
  @Output() hzCurIndexChange = new EventEmitter<number>();
  @ContentChildren(HzTabComponent) listOfHzHzTabComponent: QueryList<HzTabComponent>;
  @ContentChildren(RouterLinkWithHref, { descendants: false }) listOfRouterLinkWithHref: QueryList<RouterLinkWithHref>;
  @ViewChild('tabsUlElement', { static: false }) tabsUlElement: ElementRef<HTMLUListElement>;
  @Input() hzBeforeCurIndexChange: (newIndex: number) => boolean = (newIndex?: number) => true;
  trackByFn = (index: number) => index;
  constructor(private cdr: ChangeDetectorRef, private router: Router, private renderer: Renderer2) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit(): void {
    this.listOfHzHzTabComponent.changes.pipe(startWith(true), takeUntil(this.destroy$)).subscribe(() => {
      this.children = this.listOfHzHzTabComponent.toArray().map(e => ({
        contentType: e.contentType,
        title: e.hzTabTitle,
        templateRef: e.templateRef,
        lazyTemplate: e.lazyTemplate
      }));
    });
    this.cdr.detectChanges();
    if (this.hzTabsRouteMode) {
      this.listOfRouterLinkWithHref.changes.pipe().subscribe(() => {
        const activeLinkIndex = this.listOfRouterLinkWithHref.toArray().findIndex(e => this.router.isActive(e.urlTree, this.hzLinkExact));
        if (activeLinkIndex > -1) {
          this.hzCurIndex = activeLinkIndex;
          this.hzCurIndexChange.emit(this.hzCurIndex);
        }
        this.cdr.detectChanges();
      });
    }
    const resize$ = fromEvent(window, 'resize').pipe(debounceTime(40));
    merge(this.listOfHzHzTabComponent.changes, resize$)
      .pipe(startWith(true), takeUntil(this.destroy$))
      .subscribe(() => {
        this.cdr.detectChanges();
        this.setScroll();
      });
  }

  change(index: number) {
    if (!this.hzBeforeCurIndexChange(index)) {
      return;
    }
    if (this.hzCurIndex !== index) {
      this.hzCurIndex = index;
      this.scrollToActive();
      this.hzTabsChange.emit(index);
      this.hzCurIndexChange.emit(index);
    }
  }

  scroll(dir: 'left' | 'right') {
    const ul = this.tabsUlElement.nativeElement;
    if (dir === 'left') {
      this.transformX = this.transformX + ul.clientWidth / 3;
      if (this.transformX > 0) {
        this.transformX = 0;
      }
    } else {
      this.transformX = this.transformX - ul.clientWidth / 3;
      if (this.transformX < -this.beyondWidth) {
        this.transformX = -this.beyondWidth;
      }
    }
    this.renderer.setStyle(this.tabsUlElement.nativeElement, 'transform', `translateX(${this.transformX}px)`);
  }

  setScroll() {
    this.scrolling = false;
    // // refresh view to get right width value
    this.cdr.detectChanges();
    const ul = this.tabsUlElement.nativeElement;
    if (ul.scrollWidth - ul.clientWidth > 0) {
      this.scrolling = true;
      this.beyondWidth = ul.scrollWidth - (ul.parentElement.parentElement.clientWidth - this.tabScrollBtnWidth * 2);
      this.scrollToActive();
      this.cdr.detectChanges();
    } else {
      this.transformX = 0;
      this.renderer.setStyle(this.tabsUlElement.nativeElement, 'transform', `translateX(${this.transformX}px)`);
    }
  }

  scrollToActive() {
    if (this.scrolling) {
      const ul = this.tabsUlElement.nativeElement;
      if (this.hzCurIndex > 0 && ul.children[this.hzCurIndex]) {
        let offsetX = 0;
        for (let i = 0; i < this.hzCurIndex; i++) {
          offsetX = offsetX + ul.children[i].clientWidth;
        }
        let activeLiWidth = 0;
        if (ul.children[this.hzCurIndex]) {
          activeLiWidth = ul.children[this.hzCurIndex].clientWidth;
        }
        this.transformX = -(offsetX - ul.clientWidth / 2 + activeLiWidth / 2);
        if (this.transformX < -this.beyondWidth) {
          this.transformX = -this.beyondWidth;
        }
        if (this.transformX > 0) {
          this.transformX = 0;
        }
        this.renderer.setStyle(this.tabsUlElement.nativeElement, 'transform', `translateX(${this.transformX}px)`);
      }
    }
  }
}

interface HzTabsComponentInfo {
  contentType: 'string' | 'template';
  title: string | TemplateRef<void>;
  templateRef: TemplateRef<void>;
  lazyTemplate: TemplateRef<void>;
}
