import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { HzTreeService } from '../tree.service';
import { HzTreeNode } from '../tree.model';
import { takeUntil } from 'rxjs/operators';
import { HzTreeComponent } from '../tree.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'hz-tree-node',
  templateUrl: './tree-node.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.display]': '"block"',
    '[style.paddingTop]': '1 + "px"',
    '[style.paddingBottom]': '1 + "px"',
    '(click)': 'onHostClick()'
  }
})
export class HzTreeNodeComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  @Input() node: HzTreeNode;
  @Input() level: number;
  @Input() checked: boolean;
  @Input() loading: boolean;
  @Input() active: boolean;
  @Input() set selected(value: boolean) {
    if (value) {
      this.store.selectedTreeNodeMap.set(this.node.key, this.node);
    } else {
      this.store.selectedTreeNodeMap.delete(this.node.key);
    }
  }
  @Input() indeterminate: boolean;
  @Output() toggleChange = new EventEmitter<boolean>();
  constructor(public store: HzTreeService, private tree: HzTreeComponent) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onToggleClick(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.toggleChange.emit(this.node.expanded);
  }

  onCheckboxClick(event: MouseEvent) {
    event.stopPropagation();
  }

  onHostClick() {
    this.tree.hzTreeNodeClick.emit(this.node);
    if (this.store.enableWholeNodeToggle) {
      this.onToggleClick();
    }
    if (this.store.selectMode) {
      if (this.store.beforeSelect) {
        this.store
          .beforeSelect(this.node)
          .pipe(takeUntil(this.destroy$))
          .subscribe(bool => {
            if (bool) {
              this.setSelectedNodeMap();
            }
          });
      } else {
        this.setSelectedNodeMap();
      }
    }
  }

  setSelectedNodeMap() {
    if (this.store.selectedTreeNodeMap.get(this.node.key)) {
      this.node.selected = false;
      this.store.selectedTreeNodeMap.delete(this.node.key);
    } else {
      this.node.selected = true;
      this.store.selectedTreeNodeMap.set(this.node.key, this.node);
    }
    this.emitSelectChange();
  }

  emitSelectChange() {
    const selectedList = this.store.getSelectedList();
    this.tree.hzSelectChange.emit({ selectedList, node: this.node, selected: this.node.selected });
  }
}
