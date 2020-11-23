import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { MarkedComponent } from './marked/marked.component';
import { CodeBoxComponent } from './code-box/code-box.component';
import { HzTabsModule } from '@haizhi/ng-hertz/tabs';

@NgModule({
  declarations: [ContainerComponent, MarkedComponent, CodeBoxComponent],
  imports: [CommonModule, HzTabsModule],
  exports: [ContainerComponent, MarkedComponent, CodeBoxComponent]
})
export class ContainerModule {}
