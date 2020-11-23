```angular
import { Component, OnInit } from '@angular/core';
import { HzTreeNode, HzTreeNodeOptions } from '@haizhi/ng-hertz/tree';

@Component({
  selector: 'hz-demo-tree-basic',
  template: `
    <div style="height: 300px">
      <hz-tree [hzData]="nodes"
               (hzActiveNodeChange)="onTreeActiveNodeChange($event)"></hz-tree>
    </div>
  `,
  styles: []
})
export class HzDemoTreeBasic implements OnInit {
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

  onTreeActiveNodeChange(node: HzTreeNode) {
    console.log(node);
  }
}

```