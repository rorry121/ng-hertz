import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-switch-value-type',
  template: `
    <div>value: {{ value }}</div>
    <hz-switch [(ngModel)]="value" [hzCheckedValue]="1" [hzUnCheckedValue]="0"></hz-switch>
    <div>status: {{ status }}</div>
    <hz-switch [(ngModel)]="status" [hzCheckedValue]="'on'" [hzUnCheckedValue]="'off'"></hz-switch>
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
export class HzDemoSwitchValueType implements OnInit {
  value: 0 | 1;
  status: 'on' | 'off' = 'on';
  constructor() {}

  ngOnInit() {}
}
