import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { ContainerModule } from '../../container/container.module';
import { RouterModule } from '@angular/router';
import { HzDemoProgressBasic } from './demo/basic';
import { HzProgressModule } from '@haizhi/ng-hertz/progress';
import { HzDemoProgressCircle } from './demo/circle';
import { HzDemoProgressCircleCustom } from './demo/circle-custom';
import { HzIconModule } from '@haizhi/ng-hertz/icon';
import { HzDemoProgressCustom } from './demo/custom';

@NgModule({
  declarations: [ProgressComponent, HzDemoProgressBasic, HzDemoProgressCircle, HzDemoProgressCircleCustom, HzDemoProgressCustom],
  imports: [
    CommonModule,
    ContainerModule,
    HzProgressModule,
    RouterModule.forChild([{ path: '', component: ProgressComponent }]),
    HzIconModule
  ]
})
export class ProgressModule {}
