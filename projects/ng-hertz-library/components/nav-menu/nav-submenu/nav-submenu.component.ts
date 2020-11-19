import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';

@Component({
  selector: '[hz-nav-submenu]',
  templateUrl: './nav-submenu.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.hz-nav-submenu]': 'true',
    '[class.hz-nav-submenu-open]': 'hzExpand'
  }
})
export class HzNavSubmenuComponent implements OnInit {
  @Input() hzTitle: string | TemplateRef<void>;
  @Input() hzIcon: string | TemplateRef<void>;
  @Input() hzExpand = false;
  isIconTemplate = false;
  isTitleTemplate = false;
  constructor() {}

  ngOnInit() {
    if (this.hzIcon instanceof TemplateRef) {
      this.isIconTemplate = true;
    }
    if (this.hzTitle instanceof TemplateRef) {
      this.isIconTemplate = true;
    }
  }

  toggle() {
    this.hzExpand = !this.hzExpand;
  }
}
