import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HzCheckboxComponent } from './checkbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HzCheckboxComponent],
  exports: [HzCheckboxComponent],
  imports: [CommonModule, FormsModule]
})
export class HzCheckboxModule {}
