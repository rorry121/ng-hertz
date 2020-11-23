import { Component, OnInit } from '@angular/core';
import { HzTreeNodeOptions } from '@haizhi/ng-hertz/tree';

@Component({
  selector: 'hz-demo-tree-virtual-scroll',
  template: `
    <div>
      <hz-tree
        [hzData]="nodes"
        hzVirtualHeight="180px"
        [hzVirtualItemSize]="34"
        [hzVirtualMaxBufferPx]="340"
        [hzVirtualMinBufferPx]="68"
        [hzNodeTemplate]="nodeTpl"
        [hzShowTreeBranch]="true"
      ></hz-tree>
      <ng-template #nodeTpl let-node>
        <div class="node-tpl">
          <i hz-icon [hzName]="node.expanded ? 'folder1-open' : 'folder1'"></i>
          <span class="node-tpl-title">{{ node.title }}</span>
        </div>
      </ng-template>
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
    `
  ]
})
export class HzDemoTreeVirtualScroll implements OnInit {
  nodes: HzTreeNodeOptions[] = [];
  constructor() {}

  ngOnInit(): void {
    const dig = (path = '0', level = 3) => {
      const list = [];
      for (let i = 0; i < 10; i += 1) {
        const key = `${path}-${i}`;
        const treeNode: HzTreeNodeOptions = {
          title: key,
          key,
          expanded: true,
          children: [],
          isLeaf: false
        };
        if (level > 0) {
          treeNode.children = dig(key, level - 1);
        } else {
          treeNode.expanded = false;
          treeNode.isLeaf = true;
        }

        list.push(treeNode);
      }
      return list;
    };

    this.nodes = dig();
  }
}
