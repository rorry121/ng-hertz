import { Component, OnDestroy, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { CodeBoxComponent } from '../container/code-box/code-box.component';

@Component({
  selector: 'doc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit, OnDestroy {
  showNav: boolean;
  destroy$ = new Subject();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay(),
    takeUntil(this.destroy$)
  );
  @ViewChildren(CodeBoxComponent) listOfCodeBoxComponent: QueryList<CodeBoxComponent>;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.isHandset$.subscribe(bool => {
      console.log('isHandset$', bool);
      this.showNav = !bool;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onMenuClick() {
    this.showNav = !this.showNav;
  }
}
