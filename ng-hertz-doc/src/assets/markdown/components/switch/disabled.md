```angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-switch-disabled',
  template: `
    <hz-switch [(ngModel)]="checked" [hzDisabled]="disabled"></hz-switch>
    <button hz-button (click)="disabled = !disabled" hzType="outline">Toggle</button>
  `,
  styles: [
    `
      [hz-button] {
        margin-left: 24px;
      }
    `
  ]
})
export class HzDemoSwitchDisabled implements OnInit {
  checked: boolean;
  disabled = true;
  constructor() {}

  ngOnInit() {}
}

```