import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HzSwitchComponent } from './switch.component';

@NgModule({
  declarations: [HzSwitchComponent],
  exports: [HzSwitchComponent],
  imports: [CommonModule]
})
export class HzSwitchModule {}
