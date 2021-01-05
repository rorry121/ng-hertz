import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-tooltip-template',
  template: `
    <div>
      <button hz-button hzType="outline" hz-tooltip [hzTooltipTitle]="template">This tooltip with a icon</button>
      <ng-template #template>
        <div>
          <i hz-icon hzName="info-sign-bold" [hzColor]="'#ffffff'"></i>
          <span>this tooltip with a icon</span>
        </div>
      </ng-template>
      <button hz-button hzType="outline" hz-tooltip [hzTooltipTitle]="infoTemplate" [hzTooltipShowArrow]="false" hzTooltipType="info">
        How to make a template to show
      </button>
      <ng-template #infoTemplate>
        <div>
          <p>1. make a template</p>
          <p>2. pass the template to hzTooltipTitle</p>
        </div>
      </ng-template>
    </div>
  `,
  styles: [
    `
      [hz-button] {
        margin-right: 50px;
      }
      [hz-icon] {
        margin-right: 4px;
      }
    `
  ]
})
export class HzDemoTooltipTemplate implements OnInit {
  constructor() {}

  ngOnInit() {}
}
