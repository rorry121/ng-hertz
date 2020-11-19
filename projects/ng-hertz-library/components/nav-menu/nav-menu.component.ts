import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: '[hz-nav-menu]',
  templateUrl: './nav-menu.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.hz-nav-menu]': 'true'
  }
})
export class HzNavMenuComponent implements OnInit {
  @Input() hzExpandAll = false;
  constructor() {}

  ngOnInit() {}
}
