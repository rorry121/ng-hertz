```angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-tooltip-basic',
  template: `
    <button class="tooltip-item" hz-button hzType="action" hzShape="circle" hz-tooltip hzTooltipTitle="Edit">
      <i hz-icon hzName="edit"></i>
    </button>
    <i class="tooltip-item" hz-icon hzName="info" hz-tooltip [hzTooltipTitle]="longTitle" hzTooltipMaxWidth="240px"></i>
    <button class="tooltip-item" hz-button hzType="outline" hz-tooltip hzTooltipTitle="The fixed width is 180px" hzTooltipWidth="180px">
      Fixed width
    </button>
  `,
  styles: [
    `
      .tooltip-item {
        margin-right: 24px;
      }
    `
  ]
})
export class HzDemoTooltipBasic implements OnInit {
  longTitle = 'One needs 3 things to be truly happy living in the world: some thing to do, some one to love, some thing to hope for.';
  constructor() {}

  ngOnInit() {}
}

```