import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HzDemoCheckboxBasic } from './demo/basic';
import { CheckboxComponent } from './checkbox.component';
import { RouterModule } from '@angular/router';
import { ContainerModule } from '../../container/container.module';
import { HzCheckboxModule } from '@haizhi/ng-hertz/checkbox';
import { HzDemoCheckboxIndeterminate } from './demo/indeterminate';
import { FormsModule } from '@angular/forms';
import { HzDemoCheckboxDisabled } from './demo/disabled';

@NgModule({
  declarations: [HzDemoCheckboxBasic, CheckboxComponent, HzDemoCheckboxIndeterminate, HzDemoCheckboxDisabled],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CheckboxComponent }]),
    ContainerModule,
    HzCheckboxModule,
    FormsModule
  ]
})
export class CheckboxModule {}
