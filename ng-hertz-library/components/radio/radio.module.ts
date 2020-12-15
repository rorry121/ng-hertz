import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HzRadioComponent } from './radio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HzRadioComponent],
  imports: [CommonModule, FormsModule],
  exports: [HzRadioComponent]
})
export class HzRadioModule {}
