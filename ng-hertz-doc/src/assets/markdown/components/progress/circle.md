```angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-progress-circle',
  template: `
    <div class="progress-item">
      <hz-progress [hzPercent]="60" hzType="circle">
        <div class="progress-item-inner">60 %</div>
      </hz-progress>
    </div>
    <div class="progress-item">
      <hz-progress [hzPercent]="90" hzType="circle" hzStatus="success">
        <div class="progress-item-inner">90 %</div>
      </hz-progress>
    </div>
    <div class="progress-item">
      <hz-progress [hzPercent]="70" hzType="circle" hzStatus="warning">
        <div class="progress-item-inner">70 %</div>
      </hz-progress>
    </div>
    <div class="progress-item">
      <hz-progress [hzPercent]="30" hzType="circle" hzStatus="error">
        <div class="progress-item-inner">
          <i hz-icon hzName="failed" hzSize="32px"></i>
        </div>
      </hz-progress>
    </div>
  `,
  styles: [
    `
      .progress-item {
        height: 100px;
        width: 100px;
        display: inline-block;
        margin: 8px;
      }
      .progress-item-inner {
        font-weight: 600;
        font-size: 24px;
        height: 100%;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
      }
    `
  ]
})
export class HzDemoProgressCircle implements OnInit {
  constructor() {}

  ngOnInit() {}

  onModelChange(checked: boolean, item) {
    console.log(checked, item);
  }
}

```