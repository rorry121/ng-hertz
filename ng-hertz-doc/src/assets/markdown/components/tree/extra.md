```angular
import { Component, OnInit } from '@angular/core';
import { HzTreeNodeOptions } from '@haizhi/ng-hertz/tree';

@Component({
  selector: 'hz-demo-tree-extra',
  template: `
    <div>
      <hz-tree [hzData]="nodes" [hzNodeExtraTemplate]="extraTpl"></hz-tree>
      <ng-template let-node #extraTpl>
        <div class="extra" *ngIf="node.expanded && !node.disabled">
          <div class="extra-content">
            this is extra content
          </div>
        </div>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .extra {
        margin: 4px 0;
        padding: 8px 16px;
      }
    `
  ]
})
export class HzDemoTreeExtra implements OnInit {
  index = 0;
  list = ['option1', 'option2', 'option3'];
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

```