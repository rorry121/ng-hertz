```angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-progress-custom',
  template: `
    <div class="progress-item">
      <hz-progress [hzPercent]="60"></hz-progress>
    </div>
    <div class="progress-item">
      <hz-progress [hzPercent]="60" hzStatus="success"></hz-progress>
    </div>
    <div class="progress-item">
      <hz-progress [hzPercent]="60" hzStatus="warning"></hz-progress>
    </div>
    <div class="progress-item">
      <hz-progress [hzPercent]="60" hzStatus="error"></hz-progress>
    </div>
    <div class="progress-with-num">
      <hz-progress [hzPercent]="20" hzStatus="success" hzStrokeWidth="1"></hz-progress>
      <span>20%</span>
    </div>
    <div class="progress-with-num">
      <hz-progress [hzPercent]="30" hzStatus="info" hzStrokeWidth="2"></hz-progress>
      <span>30%</span>
    </div>
    <div class="progress-with-num">
      <hz-progress [hzPercent]="75" hzStrokeWidth="8" hzStrokeColor="#00bbc2" hzTrailColor="#00bbc2" hzTrailOpacity="0.2"></hz-progress>
      <span>75%</span>
    </div>
    <div class="progress-with-num">
      <hz-progress [hzPercent]="30" hzStrokeWidth="10" hzStrokeColor="#f5cd00"></hz-progress>
      <span>30%</span>
    </div>
  `,
  styles: [
    `
      .progress-item {
        width: 100px;
        display: inline-block;
        margin-bottom: 8px;
        margin-right: 8px;
      }
      .progress-with-num {
        max-width: 100%;
        width: 500px;
        display: flex;
        align-items: center;
        margin-bottom: 8px;
      }
      .progress-with-num span {
        margin-left: 8px;
      }
    `
  ]
})
export class HzDemoProgressCustom implements OnInit {
  constructor() {}

  ngOnInit() {}

  onModelChange(checked: boolean, item) {
    console.log(checked, item);
  }
}

```