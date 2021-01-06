```angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-tooltip-manual',
  template: `
    <div>
      <button hz-button hzType="outline" hz-tooltip [(hzTooltipVisible)]="visible" hzTooltipTitle="Tooltip that can be manually controlled">
        Manual control
      </button>
      <div class="btn-wrap">
        <button hz-button hzType="text" (click)="toggle(true)">Open</button>
        <button hz-button hzType="text" (click)="toggle(false)">Close</button>
      </div>
      <button
        hz-button
        hzType="outline"
        hz-tooltip
        [(hzTooltipVisible)]="pure"
        hzTooltipTitle="Fully manually controlled tooltip"
        [hzTooltipTrigger]="null"
      >
        Fully manual control
      </button>
      <div class="btn-wrap">
        <button hz-button hzType="text" (click)="togglePure(true)">Open</button>
        <button hz-button hzType="text" (click)="togglePure(false)">Close</button>
      </div>
    </div>
  `,
  styles: [
    `
      .btn-wrap {
        margin-top: 16px;
      }
      .btn-wrap button {
        margin-right: 16px;
        margin-bottom: 24px;
      }
    `
  ]
})
export class HzDemoTooltipManual implements OnInit {
  visible = false;
  pure: boolean;
  constructor() {}

  ngOnInit() {}

  toggle(value: boolean) {
    this.visible = value;
  }

  togglePure(value: boolean) {
    this.pure = value;
  }
}

```