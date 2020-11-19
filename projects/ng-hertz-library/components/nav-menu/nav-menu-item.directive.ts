import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[hz-nav-menu-item]',
  host: {
    '[class.hz-nav-menu-item]': 'true'
  }
})
export class HzNavMenuItemDirective implements OnInit {
  isActive = false;
  constructor() {}

  ngOnInit() {}
}
