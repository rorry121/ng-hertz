import { Injectable, TemplateRef } from '@angular/core';
import { HzTreeNode } from './tree.model';
import { Observable } from 'rxjs';

@Injectable()
export class HzTreeService {
  queryText: string;
  activeNodeKey: string;
  isExpandAll: boolean;
  selectMode = false;
  showNodeToggle = true;
  checkable = false;
  enableWholeNodeToggle = false;
  showTreeBranch = false;
  noHoverEffect = false;
  leafNodeBranchY = '50%';
  nodeIndent = 16;
  nodeToggle: TemplateRef<{ $implicit: HzTreeNode }>;
  nodeTemplate: TemplateRef<{ $implicit: HzTreeNode }>;
  nodeExtraTemplate: TemplateRef<{ $implicit: HzTreeNode }>;
  beforeExpand: (node: HzTreeNode) => Observable<boolean>;
  beforeActive: (node: HzTreeNode) => Observable<boolean>;
  beforeSelect: (node: HzTreeNode) => Observable<boolean>;

  treeNodeMap = new Map<string | number, HzTreeNode>([]);

  checkedTreeNodeMap = new Map<string | number, HzTreeNode>([]);
  selectedTreeNodeMap = new Map<string | number, HzTreeNode>([]);

  // 树形结构的原始数据
  originTreeData: Array<HzTreeNode> = [];
  // 完整的节点
  fullTreeNodeMap: Map<string | number, HzTreeNode> = new Map([]);
  // 完整的节点 key 数组
  fullTreeNodeKeys: Array<string> = [];
  // 搜索状态下完整的节点
  filteredFullTreeNodeMap: Map<string | number, HzTreeNode> = new Map([]);
  // 搜索状态下完整的节点 key 数组
  filteredFullTreeNodeKeys: Array<string> = [];

  // 所有已加载的树节点 key 对应的 index
  fullTreeNodeIndexMap: Map<string, number> = new Map([]);
  // 打平后显示的节点列表
  flatTreeNodeKeys: Array<string> = [];
  // 叶子节点
  leafTreeNodeKeys: Array<string> = [];
  constructor() {}

  handleOriginTreeData(originTreeData: HzTreeNode[]) {
    this.originTreeData = originTreeData;
    this.fullTreeNodeMap.clear();
    this.fullTreeNodeKeys = [];
    this.fullTreeNodeIndexMap.clear();
    this.checkedTreeNodeMap.clear();
    this.selectedTreeNodeMap.clear();
    this.flatTreeNodeKeys = [];
    this.leafTreeNodeKeys = [];
    this.flatTreeData(originTreeData);
    // update checked
    const checkedList = this.getCheckedList();
    checkedList.forEach(node => {
      this.updateChecked(node);
    });
  }

  flatTreeData(nodes: HzTreeNode[], parent: HzTreeNode = null, level = 0, expanded = true) {
    nodes.map((node, index) => {
      node.isStart = [...(parent ? parent.isStart : []), index === 0];
      node.isEnd = [...(parent ? parent.isEnd : []), index === nodes.length - 1];
      node.parentKey = parent ? parent.key : null;
      node.level = level;
      this.fullTreeNodeMap.set(node.key, node);
      this.fullTreeNodeKeys.push(node.key);
      this.fullTreeNodeIndexMap.set(node.key, this.fullTreeNodeKeys.length - 1);
      if (node.checked) {
        this.checkedTreeNodeMap.set(node.key, node);
      }
      if (node.selected) {
        this.selectedTreeNodeMap.set(node.key, node);
      }
      if (expanded) {
        this.flatTreeNodeKeys.push(node.key);
      }
      if (node.children && node.children.length > 0) {
        this.flatTreeData(node.children, node, level + 1, !!(expanded && node.expanded));
      } else if (node.isLeaf !== false) {
        this.leafTreeNodeKeys.push(node.key);
      }
    });
  }

  flatFilteredTreeData(nodes: HzTreeNode[], parentKey: string = null, level = 0, expanded = true) {
    nodes.map(node => {
      node.parentKey = parentKey;
      node.level = level;
      if (expanded && this.filteredFullTreeNodeMap.get(node.key)) {
        this.flatTreeNodeKeys.push(node.key);
      }
      if (node.children && node.children.length > 0) {
        this.flatFilteredTreeData(node.children, node.key, level + 1, !!(expanded && node.expanded));
      }
    });
  }

  filter(fullTreeNodeKeys: string[], queryText: string, filteredKeys = new Set([])) {
    this.filteredFullTreeNodeKeys = [];
    this.filteredFullTreeNodeMap.clear();
    fullTreeNodeKeys.forEach(nodeKey => {
      const node = this.fullTreeNodeMap.get(nodeKey);
      if (node.title.toLowerCase().indexOf(queryText.toLowerCase()) > -1) {
        filteredKeys.add(node.key);
        this.addParentKeys(node, filteredKeys);
        this.addChildrenKeys(node, filteredKeys);
      }
    });
    this.filteredFullTreeNodeKeys = [...filteredKeys].sort((a, b) => {
      return this.fullTreeNodeIndexMap.get(a) - this.fullTreeNodeIndexMap.get(b);
    });
    this.filteredFullTreeNodeKeys.forEach(key => this.filteredFullTreeNodeMap.set(key, this.fullTreeNodeMap.get(key)));
    return this.filteredFullTreeNodeKeys;
  }

  addParentKeys(node: HzTreeNode, filteredKeys: Set<string>) {
    if (node.parentKey) {
      const parent = this.fullTreeNodeMap.get(node.parentKey);
      parent.expanded = true;
      filteredKeys.add(parent.key);
      this.addParentKeys(parent, filteredKeys);
    }
  }

  addChildrenKeys(node: HzTreeNode, filteredKeys: Set<string>) {
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        filteredKeys.add(child.key);
        if (child.children && child.children.length > 0) {
          this.addChildrenKeys(child, filteredKeys);
        }
      });
    }
  }

  getCheckedList(): HzTreeNode[] {
    return [...this.checkedTreeNodeMap.values()].filter(node => node.checked);
  }

  getSelectedList(): HzTreeNode[] {
    return [...this.selectedTreeNodeMap.values()].filter(node => node.selected);
  }

  getActiveNode(): HzTreeNode {
    return this.fullTreeNodeMap.get(this.activeNodeKey);
  }

  updateChecked(node: HzTreeNode): void {
    node.indeterminate = false;
    if (node.checked) {
      this.updateChildren(node, true);
    } else {
      this.updateChildren(node, false);
    }
    this.updateParent(node);
  }

  updateChildren(node: HzTreeNode, bool: boolean) {
    if (node.children && node.children.length) {
      node.children.forEach(child => {
        child.checked = bool;
        if (child.checked) {
          this.checkedTreeNodeMap.set(child.key, child);
        } else {
          this.checkedTreeNodeMap.delete(child.key);
        }
        child.indeterminate = false;
        this.updateChildren(child, bool);
      });
    }
  }

  updateParent(node: HzTreeNode) {
    const parent = this.fullTreeNodeMap.get(node.parentKey);
    if (!parent) {
      return;
    }
    if (parent.children.every(item => !item.checked)) {
      parent.checked = false;
      parent.indeterminate = !!parent.children.find(item => item.indeterminate);
    } else if (parent.children.every(item => item.checked)) {
      parent.checked = true;
      parent.indeterminate = !!parent.children.find(item => item.indeterminate);
    } else {
      parent.checked = false;
      parent.indeterminate = true;
    }
    this.updateParent(parent);
  }
}
