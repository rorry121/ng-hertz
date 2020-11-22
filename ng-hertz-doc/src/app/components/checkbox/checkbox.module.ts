import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HzDemoCheckboxBasic } from './demo/basic';
import { CheckboxComponent } from './checkbox.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HzDemoCheckboxBasic, CheckboxComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: CheckboxComponent }])]
})
export class CheckboxModule {}
