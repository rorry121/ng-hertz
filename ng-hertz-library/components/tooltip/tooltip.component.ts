import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HzTooltipBaseComponent } from './tooltip-base/tooltip-base.component';
import { fadeMotion } from '@haizhi/ng-hertz/core/animations/fade';

@Component({
  selector: 'hz-tooltip',
  templateUrl: './tooltip.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeMotion]
})
export class HzTooltipComponent extends HzTooltipBaseComponent implements OnInit {
  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }

  ngOnInit() {}
}
