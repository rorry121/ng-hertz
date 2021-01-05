import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'hz-demo-tooltip-position',
  template: `
    <button
      hz-button
      hzType="outline"
      hz-tooltip
      hzTooltipTitle="asasa"
      [hzTooltipTriggerOrigin]="triggerElementRef"
      [hzTooltipPositionOrigin]="positionElementRef"
    >
      Origin
    </button>
    <span #trigger>Trigger</span>
    <span #position>Position</span>
  `,
  styles: [
    `
      span {
        margin-left: 24px;
      }
    `
  ]
})
export class HzDemoTooltipPosition implements OnInit {
  @ViewChild('trigger', { static: true }) triggerElementRef: ElementRef;
  @ViewChild('position', { static: true }) positionElementRef: ElementRef;
  constructor() {}

  ngOnInit() {}
}
