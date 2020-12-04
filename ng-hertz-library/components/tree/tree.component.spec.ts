import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { HzTreeComponent } from './tree.component';
import { CommonModule } from '@angular/common';
import { HzIconModule } from '@haizhi/ng-hertz/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HzCheckboxModule } from '@haizhi/ng-hertz/checkbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HzTreeModule } from './tree.module';
import { RouterModule } from '@angular/router';
import { HzTreeService } from './tree.service';
import { HzTreeNodeComponent } from '@haizhi/ng-hertz/tree/tree-node/tree-node.component';
import { HzTreeNodeToggleComponent } from '@haizhi/ng-hertz/tree/tree-node-toggle/tree-node-toggle.component';
import { HzTreeNodeCheckboxComponent } from '@haizhi/ng-hertz/tree/tree-node-checkbox/tree-node-checkbox.component';
import { HzTreeNodeBranchComponent } from '@haizhi/ng-hertz/tree/tree-node-branch/tree-node-branch.component';

describe('TreeComponent', () => {
  let component: HzTreeComponent;
  let fixture: ComponentFixture<HzTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HzTreeComponent,
        HzTreeNodeComponent,
        HzTreeNodeToggleComponent,
        HzTreeNodeCheckboxComponent,
        HzTreeNodeBranchComponent
      ],
      providers: [HzTreeService],
      imports: [CommonModule, FormsModule, HzIconModule, RouterModule, FormsModule, ReactiveFormsModule, HzCheckboxModule, ScrollingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  //
  // it('should nzBlockNode work', fakeAsync(() => {
  //   fixture = TestBed.createComponent(HzTreeComponent);
  //   fixture.detectChanges();
  //   const treeElement = fixture.nativeElement as HTMLElement;
  //   expect(treeElement.classList).toContain('hz-tree');
  // }));
});
