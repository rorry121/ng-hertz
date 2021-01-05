import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-tooltip-placement',
  template: `
    <div>
      <div style="margin: 10px 50px;width: 480px">
        <button
          *ngFor="let item of topDir"
          hz-button
          hzType="outline"
          hzSize="l"
          hz-tooltip
          [hzTooltipTitle]="'Tooltip ' + item"
          [hzTooltipPlacement]="item"
        >
          {{ item }}
        </button>
      </div>

      <div style="display: flex; justify-content: space-between;width: 580px;">
        <div style="width: 160px">
          <button
            *ngFor="let item of leftDir"
            hz-button
            hzType="outline"
            hzSize="l"
            hz-tooltip
            [hzTooltipTitle]="'Tooltip ' + item"
            [hzTooltipPlacement]="item"
          >
            {{ item }}
          </button>
        </div>

        <div style="width: 160px">
          <button
            *ngFor="let item of rightDir"
            hz-button
            hzType="outline"
            hzSize="l"
            hz-tooltip
            [hzTooltipTitle]="'Tooltip ' + item"
            [hzTooltipPlacement]="item"
          >
            {{ item }}
          </button>
        </div>
      </div>
      <div style="margin: 10px 50px;width: 480px">
        <button
          *ngFor="let item of bottomDir"
          hz-button
          hzType="outline"
          hzSize="l"
          hz-tooltip
          [hzTooltipTitle]="'Tooltip ' + item"
          [hzTooltipPlacement]="item"
        >
          {{ item }}
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      [hz-button] {
        width: 120px;
        margin: 8px 20px;
      }
    `
  ]
})
export class HzDemoTooltipPlacement implements OnInit {
  topDir = ['topLeft', 'top', 'topRight'];
  rightDir = ['rightTop', 'right', 'rightBottom'];
  bottomDir = ['bottomLeft', 'bottom', 'bottomRight'];
  leftDir = ['leftTop', 'left', 'leftBottom'];
  constructor() {}

  ngOnInit() {}
}
