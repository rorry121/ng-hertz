import { Component, OnInit } from '@angular/core';
import { HzTreeNode, HzTreeNodeOptions } from '@haizhi/ng-hertz/tree';
import { Observable } from 'rxjs';

@Component({
  selector: 'hz-demo-tree-lazy',
  template: `
    <div class="content">
      <div class="content-left">
        <hz-tree [hzData]="list" [hzBeforeExpand]="beforeExpand"></hz-tree>
      </div>
      <div class="content-right">
        <hz-tree
          [hzData]="nodes"
          [hzNodeTemplate]="nodeTpl"
          [hzBeforeExpand]="beforeExpand"
          [hzEnableWholeNodeToggle]="true"
          [hzShowNodeToggle]="false"
          hzVirtualHeight="200px"
          [hzNodeExtraTemplate]="extraTpl"
        ></hz-tree>
        <ng-template #nodeTpl let-node>
          <div class="node-tpl">
            <i hz-icon [hzName]="node.expanded ? 'folder1-open' : 'folder1'"></i>
            <span class="node-tpl-title">{{ node.title }}</span>
          </div>
        </ng-template>
        <ng-template let-node #extraTpl>
          <div class="extra" [style.paddingLeft]="(node.level + 1) * 16 + 'px'" *ngIf="node.loading">加载中...</div>
        </ng-template>
      </div>
    </div>
  `,
  styles: [
    `
      .node-tpl {
        display: flex;
        align-items: center;
        height: 32px;
        line-height: 32px;
      }
      .node-tpl-title {
        margin-left: 4px;
      }
      .content {
        display: flex;
        height: 200px;
      }
      .content-left {
        width: 50%;
      }
      .content-right {
        width: 50%;
      }
      .extra {
        height: 32px;
        line-height: 32px;
        font-size: 12px;
      }
    `
  ]
})
export class HzDemoTreeLazy implements OnInit {
  list: HzTreeNodeOptions[] = [
    {
      title: '0-0',
      key: '00'
    },
    {
      title: '0-1',
      key: '01'
    },
    {
      title: '0-2',
      key: '02',
      isLeaf: true
    }
  ];
  nodes: HzTreeNodeOptions[] = [
    {
      title: '0-0',
      key: '00'
    },
    {
      title: '0-1',
      key: '01'
    },
    {
      title: '0-2',
      key: '02',
      isLeaf: true
    }
  ];
  beforeExpand: (node: HzTreeNode) => Observable<boolean> = node => {
    return new Observable(observer => {
      if (node.isLeaf) {
        observer.next(false);
        observer.complete();
        return;
      }
      if (node.children && node.children.length > 0) {
        node.loaded = true;
        observer.next(true);
        observer.complete();
        return;
      }
      setTimeout(() => {
        if (!node.isLeaf) {
          node.children = [
            { key: node.key + '0', title: node.title + '-0' },
            { key: node.key + '1', title: node.title + '-1' },
            { key: node.key + '2', title: node.title + '-2' }
          ];
          if (node.level > 2) {
            node.children.forEach(e => (e.isLeaf = true));
          }
          if (node.checked) {
            node.children.forEach(e => (e.checked = true));
          }
        }
        node.loaded = true;
        observer.next(true);
        observer.complete();
      }, 1000);
    });
  };
  constructor() {}

  ngOnInit() {}
}
