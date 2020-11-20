import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, ChangeDetectorRef, Optional } from '@angular/core';
import { HzTreeService } from '../tree.service';
import { HzTreeNode } from '../tree.model';
import { HzTreeComponent } from '../tree.component';

@Component({
  selector: 'hz-tree-node-checkbox',
  templateUrl: './tree-node-checkbox.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.hz-tree-node-checkbox]': 'true'
  }
})
export class HzTreeNodeCheckboxComponent implements OnInit {
  @Input() node: HzTreeNode;
  @Input() checked: boolean;
  @Input() indeterminate: boolean;
  constructor(public store: HzTreeService, @Optional() private tree: HzTreeComponent) {}

  ngOnInit() {}

  onCheckedChange(checked: boolean) {
    this.node.checked = checked;
    if (checked) {
      this.store.checkedTreeNodeMap.set(this.node.key, this.node);
    } else {
      this.store.checkedTreeNodeMap.delete(this.node.key);
    }
    this.store.updateChecked(this.node);
    const checkedList = this.store.getCheckedList();
    // const checkedList = [...this.store.checkedTreeNodeMap.values()].sort((a, b) => {
    //   return this.store.fullTreeNodeIndexMap.get(a.key) - this.store.fullTreeNodeIndexMap.get(b.key);
    // });
    this.tree.hzCheckboxChange.emit({ checkedList, node: this.node, checked });
  }
}
