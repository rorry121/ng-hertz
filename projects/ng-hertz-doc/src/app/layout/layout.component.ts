import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'doc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  showNav: boolean;
  destroy$ = new Subject();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay(),
    takeUntil(this.destroy$)
  );
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
