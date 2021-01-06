import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HzTooltipDirective } from './tooltip.directive';
import { HzTooltipComponent } from './tooltip.component';

@NgModule({
  declarations: [HzTooltipDirective, HzTooltipComponent],
  imports: [CommonModule],
  entryComponents: [HzTooltipComponent],
  exports: [HzTooltipDirective]
})
export class HzTooltipModule {}
