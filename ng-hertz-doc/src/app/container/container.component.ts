import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import { CodeBoxComponent } from './code-box/code-box.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay, takeUntil, throttleTime } from 'rxjs/operators';
import { fromEvent, Observable, Subject, zip } from 'rxjs';
import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { MarkedComponent } from './marked/marked.component';

@Component({
  selector: 'doc-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('arise', [
      state(
        'wait',
        style({
          opacity: 0,
          transform: 'translateY(16px)'
        })
      ),
      state(
        'appear',
        style({
          opacity: 1,
          transform: 'translateY(0)'
        })
      ),
      transition('wait => appear', [
        group([
          animate('500ms cubic-bezier(.4,0,.2,1)', style({ transform: 'translateY(0)' })),
          animate('235ms cubic-bezier(.4,0,.2,1)', style({ opacity: 1 }))
        ])
      ])
    ])
  ]
})
export class ContainerComponent implements OnInit, AfterViewInit, OnDestroy {
  toc: Array<{ id: string; title: string; scrollTop?: number }>;
  tocActiveIndex = 0;
  destroy$ = new Subject<void>();
  pathname = location.pathname;
  animAppear = false;
  isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.WebLandscape).pipe(
    map(result => result.matches),
    shareReplay(),
    takeUntil(this.destroy$)
  );
  @ContentChildren(CodeBoxComponent) listOfCodeBoxComponent: QueryList<CodeBoxComponent>;
  @ContentChildren(MarkedComponent) listOfMarkdownComponent: QueryList<MarkedComponent>;

  constructor(private breakpointObserver: BreakpointObserver, private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewInit() {
    this.toc = this.listOfCodeBoxComponent.toArray().map(e => ({ id: e.tocId, title: e.title }));
    // 子组件 markdown 解析完成
    zip(...this.listOfMarkdownComponent.toArray().map(e => e.markedDone$)).subscribe(() => {
      this.animAppear = true;
      this.toc.forEach(e => {
        e.scrollTop = this.getScrollTop(e.id);
      });
      // 滚动同步右侧
      fromEvent(document, 'scroll')
        .pipe(
          throttleTime(20),
          map(event => document.documentElement.scrollTop),
          takeUntil(this.destroy$)
        )
        .subscribe(scrollTop => {
          if (scrollTop <= this.toc[0].scrollTop) {
            this.tocActiveIndex = 0;
          } else if (scrollTop >= this.toc[this.toc.length - 1].scrollTop) {
            this.tocActiveIndex = this.toc.length - 1;
          } else {
            for (let i = 0; i < this.toc.length; i++) {
              if (this.toc[i].scrollTop <= scrollTop && this.toc[i + 1].scrollTop > scrollTop) {
                this.tocActiveIndex = i;
                break;
              }
            }
          }
        });
    });
    this.cdr.detectChanges();
  }

  getScrollTop(id: string): number {
    return document.getElementById(id).offsetTop;
  }
}
