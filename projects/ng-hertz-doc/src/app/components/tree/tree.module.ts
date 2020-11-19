import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { RouterModule } from '@angular/router';
// import { HzTreeModule } from '@haizhi/ng-hertz/tree';

@NgModule({
  declarations: [TreeComponent],
  imports: [
    CommonModule,
    // HzTreeModule,
    RouterModule.forChild([{ path: '', component: TreeComponent }])
  ]
})
export class TreeModule {}
