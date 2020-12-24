```angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-progress-basic',
  template: `
    <div class="progress-item">
      <hz-progress [hzPercent]="num"></hz-progress>
    </div>
    <div class="progress-item">
      <hz-progress [hzPercent]="num" hzStatus="success"></hz-progress>
    </div>
    <div class="progress-item">
      <hz-progress [hzPercent]="num" hzStatus="warning"></hz-progress>
    </div>
    <div class="progress-item">
      <hz-progress [hzPercent]="num" hzStatus="error"></hz-progress>
    </div>
  `,
  styles: [
    `
      .progress-item {
        margin-bottom: 16px;
      }
    `
  ]
})
export class HzDemoProgressBasic implements OnInit {
  num = Math.floor(Math.random() * 100);
  constructor() {}

  ngOnInit() {}
}

```