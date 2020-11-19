import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavMenuComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: NavMenuComponent }])]
})
export class NavMenuModule {}
