import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HzIconDirective } from './icon.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HzIconDirective],
  imports: [CommonModule, HttpClientModule],
  exports: [HzIconDirective]
})
export class HzIconModule {}
