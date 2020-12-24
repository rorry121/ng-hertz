import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HzProgressComponent } from './progress.component';

@NgModule({
  declarations: [HzProgressComponent],
  imports: [CommonModule],
  exports: [HzProgressComponent]
})
export class HzProgressModule {}
