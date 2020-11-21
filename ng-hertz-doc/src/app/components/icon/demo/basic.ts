import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-tree-demo-custom-render',
  template: `
    <div>
      <hz-tree [hzData]="nodes" [hzNodeTemplate]="nodeTpl" [hzEnableWholeNodeToggle]="true" [hzShowNodeToggle]="false"></hz-tree>
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
export class TreeDemoCustomRenderComponent implements OnInit {
  nodes = [
    {
      title: '0-0',
      key: '00',
      expanded: true,
      children: [
        {
          title: '0-0-0',
          key: '000',
          expanded: true,
          children: [
            { title: '0-0-0-0', key: '0000', isLeaf: true, disabled: true },
            { title: '0-0-0-1', key: '0001', isLeaf: true },
            { title: '0-0-0-2', key: '0002', isLeaf: true }
          ]
        },
        {
          title: '0-0-1',
          key: '001',
          disabled: true,
          children: [
            { title: '0-0-1-0', key: '0010', isLeaf: true, disabled: true },
            { title: '0-0-1-1', key: '0011', isLeaf: true, disabled: true },
            { title: '0-0-1-2', key: '0012', isLeaf: true, disabled: true }
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
  constructor() {}

  ngOnInit() {}
}

interface HHHH {
  a: string;
}
