import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HzTreeComponent } from './tree.component';
import { HzTreeNodeComponent } from './tree-node/tree-node.component';
import { HzIconModule } from '@haizhi/ng-hertz/icon';
import { FormsModule } from '@angular/forms';
import { HzCheckboxModule } from '@haizhi/ng-hertz/checkbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HzTreeNodeToggleComponent } from './tree-node-toggle/tree-node-toggle.component';
import { HzTreeNodeCheckboxComponent } from './tree-node-checkbox/tree-node-checkbox.component';
// import { ButtonModule } from '@haizhi/ng-hertz/button';
import { HzTreeNodeBranchComponent } from './tree-node-branch/tree-node-branch.component';

@NgModule({
  declarations: [HzTreeComponent, HzTreeNodeComponent, HzTreeNodeToggleComponent, HzTreeNodeCheckboxComponent, HzTreeNodeBranchComponent],
  imports: [CommonModule, HzIconModule, FormsModule, HzCheckboxModule, ScrollingModule],
  exports: [HzTreeComponent, HzTreeNodeComponent]
})
export class HzTreeModule {}
