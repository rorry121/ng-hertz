```angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-switch-basic',
  template: `
    <hz-switch [(ngModel)]="checked"></hz-switch>
  `,
  styles: [
    `
      [hz-button] {
        margin-right: 16px;
      }
      .mb-16 {
        margin-bottom: 16px;
      }
    `
  ]
})
export class HzDemoSwitchBasic implements OnInit {
  checked: boolean;
  constructor() {}

  ngOnInit() {}
}

```