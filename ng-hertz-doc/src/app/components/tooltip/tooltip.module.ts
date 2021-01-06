import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { ContainerModule } from '../../container/container.module';
import { RouterModule } from '@angular/router';
import { HzDemoTooltipBasic } from './demo/basic';
import { HzTooltipModule } from '@haizhi/ng-hertz/tooltip';
import { OverlayModule } from '@angular/cdk/overlay';
import { HzDemoTooltipTemplate } from './demo/template';
import { HzDemoTooltipManual } from './demo/manual';
import { HzDemoTooltipPlacement } from './demo/placement';
import { HzDemoTooltipInfo } from './demo/info';
import { HzDemoTooltipTrigger } from './demo/trigger';
import { HzDemoTooltipPosition } from './demo/position';
import { HzIconModule } from '@haizhi/ng-hertz/icon';
import { HzButtonModule } from '@haizhi/ng-hertz/button';

@NgModule({
  declarations: [
    TooltipComponent,
    HzDemoTooltipBasic,
    HzDemoTooltipTemplate,
    HzDemoTooltipManual,
    HzDemoTooltipPlacement,
    HzDemoTooltipInfo,
    HzDemoTooltipTrigger,
    HzDemoTooltipPosition
  ],
  imports: [
    CommonModule,
    ContainerModule,
    RouterModule.forChild([{ path: '', component: TooltipComponent }]),
    HzTooltipModule,
    OverlayModule,
    HzIconModule,
    HzButtonModule
  ]
})
export class TooltipModule {}
