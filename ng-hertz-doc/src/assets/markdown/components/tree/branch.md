```angular
import { Component, OnInit } from '@angular/core';
import { HzTreeNode, HzTreeNodeOptions } from '@haizhi/ng-hertz/tree';

@Component({
  selector: 'hz-demo-tree-branch',
  template: `
    <div style="display: flex;">
      <div class="demo-item">
        <hz-tree
          [hzData]="nodes"
          [hzNodeToggle]="toggleTpl"
          [hzShowTreeBranch]="true"
          [hzCanActivateNode]="false"
          [hzNoHoverEffect]="true"
          (hzActiveNodeChange)="onTreeActiveNodeChange($event)"
        ></hz-tree>
        <ng-template #toggleTpl let-node>
          <button hz-button hzType="icon-only" hzSize="xs">
            <i hz-icon [hzName]="node.expanded ? 'data-hide' : 'data-show'"></i>
          </button>
        </ng-template>
      </div>
      <div class="demo-item">
        <hz-tree
          [hzData]="authNodes"
          [hzNodeToggle]="toggleTpl"
          [hzShowTreeBranch]="true"
          [hzCanActivateNode]="false"
          [hzNoHoverEffect]="true"
          [hzNodeTemplate]="nodeTpl"
          [hzLeafNodeBranchY]="'16px'"
          [hzNodeIndent]="32"
          (hzActiveNodeChange)="onTreeActiveNodeChange($event)"
        ></hz-tree>
        <ng-template #toggleTpl let-node>
          <button hz-button hzType="icon-only" hzSize="xs">
            <i hz-icon [hzName]="node.expanded ? 'data-hide' : 'data-show'"></i>
          </button>
        </ng-template>
        <ng-template #nodeTpl let-node>
          <div class="node-tpl">
            <span class="node-tpl-title">{{ node.title }}</span>
            <div class="node-tpl-subtitle" *ngIf="node.isLeaf">{{ node.subTitle }}</div>
          </div>
        </ng-template>
      </div>
    </div>
  `,
  styles: [
    `
      .demo-item {
        height: 300px;
        width: 50%;
        overflow: auto;
      }
      .node-tpl {
        line-height: 32px;
      }
      .node-tpl-title {
        margin-left: 4px;
        font-weight: 600;
      }
      .node-tpl-subtitle {
        margin-left: 4px;
        line-height: 20px;
      }
    `
  ]
})
export class HzDemoTreeBranch implements OnInit {
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
  authNodes: HzTreeNodeOptions[] = [
    {
      title: '权限管理',
      key: '00',
      expanded: true,
      children: [
        {
          title: '产品管理',
          key: '000',
          isLeaf: true,
          subTitle:
            '查询, 查看角色, 创建角色, 编辑角色, 删除角色，编辑角色, 删除角色，创建角色, 编辑角色, 删除角色，编辑角色, 删除角色,编辑角色, 删除角色, 删除角色,编辑角色, 删除角色'
        },
        {
          title: '角色管理',
          key: '001',
          isLeaf: true,
          subTitle: '查询, 查看角色, 创建角色, 编辑角色, 删除角色'
        },
        {
          title: '组织管理',
          key: '002',
          expanded: true,
          children: [
            {
              title: '组织1',
              key: '0021',
              isLeaf: true,
              subTitle: '查询, 查看角色, 创建角色, 编辑角色, 删除角色'
            },
            {
              title: '组织2',
              key: '0022',
              isLeaf: true,
              subTitle: '查询, 查看角色, 创建角色, 编辑角色, 删除角色'
            }
          ]
        }
      ]
    },
    {
      title: '系统管理',
      key: '01',
      isLeaf: true
    },
    {
      title: '个人信息',
      key: '02',
      isLeaf: true
    },
    {
      title: '安全设置',
      key: '03',
      expanded: true,
      children: [
        {
          title: '登录设置',
          key: '031',
          isLeaf: true,
          subTitle: '移动端登录，网页端登录'
        }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}

  onTreeActiveNodeChange(node: HzTreeNode) {
    console.log(node);
  }
}

```