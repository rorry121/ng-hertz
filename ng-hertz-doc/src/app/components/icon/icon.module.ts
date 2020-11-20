import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: IconComponent }])]
})
export class IconModule {}
