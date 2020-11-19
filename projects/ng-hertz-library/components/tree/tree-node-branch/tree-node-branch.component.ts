import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { HzTreeNode } from '../tree.model';
import { HzTreeService } from '../tree.service';

@Component({
  selector: 'hz-tree-node-branch',
  templateUrl: './tree-node-branch.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.hz-tree-node-branch]': 'true'
  }
})
export class HzTreeNodeBranchComponent implements OnInit {
  list: Array<number>;
  node: HzTreeNode;
  @Input('node') set changeNode(value: HzTreeNode) {
    if (value) {
      this.node = value;
      this.list = new Array(value.level);
    }
  }
  constructor(public store: HzTreeService) {}

  ngOnInit() {}
}
