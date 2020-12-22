```angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-radio-name',
  template: `
    <div class="mb-16">
      <label hz-radio [hzValue]="0" [(ngModel)]="num" [hzName]="'num'" (ngModelChange)="onModelChange($event)">A</label>
      <label hz-radio [hzValue]="1" [(ngModel)]="num" [hzName]="'num'" (ngModelChange)="onModelChange($event)">B</label>
      <label hz-radio [hzValue]="2" [(ngModel)]="num" [hzName]="'num'" (ngModelChange)="onModelChange($event)">C</label>
      <label hz-radio [hzValue]="3" [(ngModel)]="num" [hzName]="'num'" (ngModelChange)="onModelChange($event)">D</label>
    </div>
  `,
  styles: [
    `
      [hz-radio] {
        margin-right: 24px;
      }
      .mb-16 {
        margin-bottom: 16px;
      }
    `
  ]
})
export class HzDemoRadioName implements OnInit {
  num = 1;
  constructor() {}

  ngOnInit() {}

  onModelChange(num: number) {
    console.log(num);
  }
}

```