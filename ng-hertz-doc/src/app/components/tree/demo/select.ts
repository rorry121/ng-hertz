import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { HzTreeComponent, HzTreeNode, HzTreeNodeOptions } from '@haizhi/ng-hertz/tree';

@Component({
  selector: 'hz-demo-tree-select',
  template: `
    <div class="content">
      <div class="content-left">
        <hz-tree
          [hzData]="nodes"
          [hzSelectMode]="true"
          [hzCanActivateNode]="false"
          [hzNodeTemplate]="nodeTpl"
          (hzSelectChange)="onTreeSelectChange($event)"
          (hzDataHandledComplete)="onTreeDataHandled()"
        ></hz-tree>
        <ng-template #nodeTpl let-node>
          <div class="node-tpl">
            <i hz-icon [hzName]="node.expanded ? 'folder1-open' : 'folder1'"></i>
            <span class="node-tpl-title">{{ node.title }}</span>
          </div>
        </ng-template>
      </div>
      <div class="content-right">
        <div *ngIf="selectedList && selectedList.length > 0; else empty">
          <!--          <hz-tag-->
          <!--            *ngFor="let item of selectedList; trackBy: trackByFn; let i = index"-->
          <!--            class="tag-item"-->
          <!--            [hzCloseable]="true"-->
          <!--            (hzOnClose)="onTagClose(item, i)"-->
          <!--            >{{ item.title }}</hz-tag>-->
          <span *ngFor="let item of selectedList; trackBy: trackByFn; let i = index" class="tag-item">{{ item.title }}, </span>
        </div>
        <ng-template #empty>
          <!--          <hz-empty [hzEmptyTitle]="'暂无节点，请在左边进行选择'" [hzEmptyIcon]="'no-rule-light'"></hz-empty>-->
          <p>no data</p>
        </ng-template>
      </div>
    </div>
  `,
  styles: [
    `
      .content {
        display: flex;
      }
      .content-left {
        width: 50%;
      }
      .node-tpl {
        display: flex;
        align-items: center;
        height: 32px;
        line-height: 32px;
      }
      .node-tpl-title {
        margin-left: 4px;
      }
      .content-right {
        width: 50%;
      }
      hz-tag {
        margin: 4px;
      }
    `
  ]
})
export class HzDemoTreeSelect implements OnInit {
  selectedList: HzTreeNode[];
  nodes: HzTreeNodeOptions[];
  @ViewChild(HzTreeComponent, { static: false }) treeComponent: HzTreeComponent;
  trackByFn = node => node.key;
  constructor() {}

  ngOnInit() {
    this.getAsyncData();
  }

  getAsyncData() {
    setTimeout(() => {
      this.nodes = [
        {
          title: '0-0',
          key: '00',
          expanded: true,
          children: [
            {
              title: '0-0-0',
              key: '000',
              expanded: true,
              selected: true,
              children: [
                { title: '0-0-0-0', key: '0000', isLeaf: true, selected: true },
                { title: '0-0-0-1', key: '0001', isLeaf: true },
                { title: '0-0-0-2', key: '0002', isLeaf: true }
              ]
            },
            {
              title: '0-0-1',
              key: '001',
              selected: true,
              children: [
                { title: '0-0-1-0', key: '0010', isLeaf: true },
                { title: '0-0-1-1', key: '0011', isLeaf: true },
                { title: '0-0-1-2', key: '0012', isLeaf: true }
              ]
            },
            {
              title: '0-0-2',
              key: '002',
              isLeaf: true
            }
          ]
        },
        {
          title: '0-1',
          key: '01',
          children: [
            {
              title: '0-1-0',
              key: '010',
              children: [
                { title: '0-1-0-0', key: '0100', isLeaf: true },
                { title: '0-1-0-1', key: '0101', isLeaf: true },
                { title: '0-1-0-2', key: '0102', isLeaf: true }
              ]
            },
            {
              title: '0-1-1',
              key: '011',
              children: [
                { title: '0-1-1-0', key: '0110', isLeaf: true },
                { title: '0-1-1-1', key: '0111', isLeaf: true },
                { title: '0-1-1-2', key: '0112', isLeaf: true }
              ]
            }
          ]
        },
        {
          title: '0-2',
          key: '02',
          isLeaf: true
        }
      ];
    }, 3000);
  }

  onTreeSelectChange(event: { selectedList: HzTreeNode[]; node: HzTreeNode; selected: boolean }) {
    console.log(event);
    const { selectedList, node, selected } = event;
    this.selectedList = selectedList;
  }

  onTagClose(node: HzTreeNode, index: number) {
    this.selectedList.splice(index, 1);
    node.selected = false;
    this.treeComponent.detectChanges();
  }

  onTreeDataHandled() {
    this.selectedList = this.treeComponent.getSelectedList();
  }
}
