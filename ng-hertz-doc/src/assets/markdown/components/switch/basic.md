```angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-switch-basic',
  template: `
    <div>checked status: {{ checked }}</div>
    <hz-switch [(ngModel)]="checked" (ngModelChange)="onModelChange($event)"></hz-switch>
    <div>checked status: {{ value }}</div>
    <hz-switch [(ngModel)]="value" (ngModelChange)="onModelChange($event)"></hz-switch>
  `,
  styles: [``]
})
export class HzDemoSwitchBasic implements OnInit {
  checked: boolean;
  value = true;
  constructor() {}

  ngOnInit() {}

  onModelChange(value: boolean) {
    console.log(value);
  }
}

```