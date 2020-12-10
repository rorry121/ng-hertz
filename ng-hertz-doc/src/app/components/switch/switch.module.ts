import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch.component';
import { ContainerModule } from '../../container/container.module';
import { RouterModule } from '@angular/router';
import { HzDemoSwitchBasic } from './demo/basic';
import { FormsModule } from '@angular/forms';
import { HzSwitchModule } from '@haizhi/ng-hertz/switch';
import { HzDemoSwitchValueType } from './demo/value-type';
import { HzDemoSwitchDisabled } from './demo/disabled';
import { HzButtonModule } from '@haizhi/ng-hertz/button';

@NgModule({
  declarations: [SwitchComponent, HzDemoSwitchBasic, HzDemoSwitchValueType, HzDemoSwitchDisabled],
  imports: [
    CommonModule,
    ContainerModule,
    RouterModule.forChild([{ path: '', component: SwitchComponent }]),
    FormsModule,
    HzSwitchModule,
    HzButtonModule
  ]
})
export class SwitchModule {}
