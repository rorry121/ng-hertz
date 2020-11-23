import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { RouterModule } from '@angular/router';
import { HzTreeModule } from '@haizhi/ng-hertz/tree';
import { HzDemoTreeBasic } from './demo/basic';
import { ContainerModule } from '../../container/container.module';
import { HzDemoTreeBranch } from './demo/branch';
import { HzIconModule } from '@haizhi/ng-hertz/icon';
import { HzDemoTreeSearch } from './demo/search';
import { FormsModule } from '@angular/forms';
import { HzDemoTreeCustomRender } from './demo/custom-render';
import { HzDemoTreeSelect } from './demo/select';
import { HzDemoTreeLazy } from './demo/lazy';
import { HzDemoTreeVirtualScroll } from './demo/virtal-scroll';
import { HzDemoTreeExtra } from './demo/extra';

@NgModule({
  declarations: [
    TreeComponent,
    HzDemoTreeBasic,
    HzDemoTreeBranch,
    HzDemoTreeSearch,
    HzDemoTreeCustomRender,
    HzDemoTreeSelect,
    HzDemoTreeLazy,
    HzDemoTreeVirtualScroll,
    HzDemoTreeExtra
  ],
  imports: [
    CommonModule,
    HzTreeModule,
    ContainerModule,
    HzIconModule,
    RouterModule.forChild([{ path: '', component: TreeComponent }]),
    FormsModule
  ]
})
export class TreeModule {}
