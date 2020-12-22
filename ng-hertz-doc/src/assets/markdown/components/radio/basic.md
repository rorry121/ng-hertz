```angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-radio-basic',
  template: `
    <div>
      <label hz-radio [hzValue]="'on'" [(ngModel)]="status" (ngModelChange)="onModelChange($event)">On</label>
      <label hz-radio [hzValue]="'off'" [(ngModel)]="status" (ngModelChange)="onModelChange($event)">Off</label>
    </div>
  `,
  styles: [
    `
      [hz-radio] {
        margin-right: 24px;
      }
    `
  ]
})
export class HzDemoRadioBasic implements OnInit {
  status: string;
  constructor() {}

  ngOnInit() {}

  onModelChange(num: number) {
    console.log(num);
  }
}

```