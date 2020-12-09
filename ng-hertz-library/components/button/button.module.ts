import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HzButtonComponent } from '@haizhi/ng-hertz/button/button.component';

@NgModule({
  declarations: [HzButtonComponent],
  exports: [HzButtonComponent],
  imports: [CommonModule]
})
export class HzButtonModule {}
