import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { HzButtonModule } from '@haizhi/ng-hertz/button';
import { ContainerModule } from '../../container/container.module';
import { RouterModule } from '@angular/router';
import { HzDemoButtonBasic } from './demo/basic';
import { HzIconModule } from '@haizhi/ng-hertz/icon';
import { HzDemoButtonSize } from './demo/size';
import { HzDemoButtonCircle } from './demo/circle';
import { HzDemoButtonBlock } from './demo/block';

@NgModule({
  declarations: [ButtonComponent, HzDemoButtonBasic, HzDemoButtonCircle, HzDemoButtonSize, HzDemoButtonBlock],
  imports: [CommonModule, HzButtonModule, ContainerModule, HzIconModule, RouterModule.forChild([{ path: '', component: ButtonComponent }])]
})
export class ButtonModule {}
