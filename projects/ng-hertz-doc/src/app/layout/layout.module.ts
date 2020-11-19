import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { HzIconModule } from '@haizhi/ng-hertz/icon';
import { HzNavMenuModule } from '@haizhi/ng-hertz/nav-menu';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, NavComponent, ContentComponent],
  imports: [CommonModule, RouterModule, HzIconModule, HzNavMenuModule]
})
export class LayoutModule {}
