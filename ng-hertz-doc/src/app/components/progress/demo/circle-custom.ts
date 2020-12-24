import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-progress-circle-custom',
  template: `
    <div class="progress-circle-item">
      <hz-progress [hzPercent]="60" hzType="circle">
        <div class="progress-item-inner">60 %</div>
      </hz-progress>
    </div>
    <div class="progress-circle-item">
      <hz-progress [hzPercent]="30" hzType="circle" hzStrokeColor="#FF5266" hzTrailColor="#f5f5f5" [hzStrokeWidth]="12"> </hz-progress>
    </div>
    <div class="progress-circle-item">
      <hz-progress
        hzType="circle"
        hzStrokeColor="#00BBC2"
        hzTrailColor="#f5f5f5"
        [hzPercent]="70"
        [hzStrokeWidth]="8"
        hzStrokeLinecap="square"
      ></hz-progress>
    </div>
    <div class="progress-circle-item">
      <hz-progress [hzPercent]="100" hzType="circle" hzStrokeColor="#239545" hzTrailOpacity=".5" [hzStrokeWidth]="8">
        <div class="progress-item-inner">
          <i hz-icon hzName="finished" hzColor="#239545" hzSize="36px"></i>
        </div>
      </hz-progress>
    </div>
  `,
  styles: [
    `
      .progress-circle-item {
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
export class HzDemoProgressCircleCustom implements OnInit {
  constructor() {}

  ngOnInit() {}

  onModelChange(checked: boolean, item) {
    console.log(checked, item);
  }
}
