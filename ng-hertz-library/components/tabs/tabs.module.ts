import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HzTabsComponent } from './tabs.component';
import { HzTabComponent } from './tab/tab.component';
import { RouterModule } from '@angular/router';
import { HzIconModule } from '@haizhi/ng-hertz/icon';
// import { ButtonModule } from '@haizhi/ng-hertz/button';

@NgModule({
  declarations: [HzTabsComponent, HzTabComponent],
  imports: [CommonModule, RouterModule, HzIconModule],
  exports: [HzTabsComponent, HzTabComponent]
})
export class HzTabsModule {}
