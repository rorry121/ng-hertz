import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, NavComponent],
  imports: [CommonModule]
})
export class LayoutModule {}
