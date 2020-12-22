import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import { ContainerModule } from '../../container/container.module';
import { RouterModule } from '@angular/router';
import { HzDemoRadioBasic } from './demo/basic';
import { HzRadioModule } from '@haizhi/ng-hertz/radio';
import { FormsModule } from '@angular/forms';
import { HzDemoRadioDisabled } from './demo/disabled';
import { HzDemoRadioName } from './demo/name';

@NgModule({
  declarations: [RadioComponent, HzDemoRadioBasic, HzDemoRadioDisabled, HzDemoRadioName],
  imports: [CommonModule, ContainerModule, HzRadioModule, FormsModule, RouterModule.forChild([{ path: '', component: RadioComponent }])]
})
export class RadioModule {}
