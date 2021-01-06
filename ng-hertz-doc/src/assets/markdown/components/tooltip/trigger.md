```angular
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'hz-demo-tooltip-trigger',
  template: `
    <button hz-button hzType="outline" hz-tooltip hzTooltipTitle="asasa" [hzTooltipTriggerOrigin]="triggerElementRef">Origin</button>
    <span #trigger>Trigger</span>
  `,
  styles: [
    `
      span {
        margin-left: 24px;
      }
    `
  ]
})
export class HzDemoTooltipTrigger implements OnInit {
  @ViewChild('trigger', { static: true }) triggerElementRef: ElementRef;
  constructor() {}

  ngOnInit() {}
}

```