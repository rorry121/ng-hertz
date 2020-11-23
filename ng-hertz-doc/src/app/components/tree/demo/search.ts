import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { HzTreeComponent, HzTreeNodeOptions } from '@haizhi/ng-hertz/tree';
import { Subject } from 'rxjs';
import { HzTreeNode } from '@haizhi/ng-hertz/tree';

@Component({
  selector: 'hz-demo-tree-search',
  template: `
    <div class="content">
      <div class="content-left">
        <div class="search-wrap">
          <input type="text" [(ngModel)]="queryText" (ngModelChange)="searchModelChange$.next($event)" hzWidth="100%" />
        </div>
        <hz-tree
          [hzData]="nodes"
          [hzCheckable]="true"
          [hzSearchModelChange]="searchModelChange$"
          (hzCheckboxChange)="onTreeCheckboxChange($event)"
          #Tree
        ></hz-tree>
      </div>
      <div class="content-right">
        <div *ngIf="checkedList && checkedList.length > 0; else empty">
          <!--          <hz-tag *ngFor="let item of checkedList; trackBy: trackByFn; let i = index" class="tag-item">{{ item.title }}</hz-tag>-->
          <span *ngFor="let item of checkedList; trackBy: trackByFn; let i = index" class="tag-item">{{ item.title }}, </span>
        </div>
        <ng-template #empty>
          <!--          <hz-empty [hzEmptyTitle]="'暂无节点，请在左边进行勾选'" [hzEmptyIcon]="'no-rule-light'"></hz-empty>-->
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
      .search-wrap {
        margin-bottom: 8px;
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
export class HzDemoTreeSearch implements OnInit, AfterViewInit {
  queryText = '';
  searchModelChange$ = new Subject<string>();
  nodes: HzTreeNodeOptions[] = [
    {
      title: '0-0',
      key: '00',
      expanded: true,
      children: [
        {
          title: '0-0-0',
          key: '000',
          expanded: true,
          checked: true,
          children: [
            { title: '0-0-0-0', key: '0000', isLeaf: true, checked: true },
            { title: '0-0-0-1', key: '0001', isLeaf: true, checked: true },
            { title: '0-0-0-2', key: '0002', isLeaf: true, checked: true }
          ]
        },
        {
          title: '0-0-1',
          key: '001',
          checked: true,
          children: [
            { title: '0-0-1-0', key: '0010', isLeaf: true, checked: true },
            { title: '0-0-1-1', key: '0011', isLeaf: true, checked: true },
            { title: '0-0-1-2', key: '0012', isLeaf: true, checked: true }
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
  checkedList: HzTreeNode[];
  @ViewChild(HzTreeComponent, { static: false }) treeComponent: HzTreeComponent;
  trackByFn = node => node.key;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.checkedList = this.treeComponent.getCheckedList();
    this.cdr.detectChanges();
  }

  onTreeCheckboxChange(event: { checkedList: HzTreeNode[]; node: HzTreeNode; checked: boolean }) {
    console.log(event);
    const { checkedList, node, checked } = event;
    this.checkedList = checkedList;
  }
}
