import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HzNavMenuComponent } from './nav-menu.component';
import { HzNavMenuItemDirective } from './nav-menu-item.directive';
import { HzNavSubmenuComponent } from './nav-submenu/nav-submenu.component';
import { HzIconModule } from '@haizhi/ng-hertz/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HzNavMenuComponent, HzNavMenuItemDirective, HzNavSubmenuComponent],
  imports: [CommonModule, HzIconModule, RouterModule],
  exports: [HzNavMenuComponent, HzNavMenuItemDirective, HzNavSubmenuComponent]
})
export class HzNavMenuModule {}
