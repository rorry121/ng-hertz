import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { HzTreeNode } from '../tree.model';
import { HzTreeService } from '../tree.service';

@Component({
  selector: 'hz-tree-node-toggle',
  templateUrl: './tree-node-toggle.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.hz-tree-node-toggle]': 'true'
  }
})
export class HzTreeNodeToggleComponent implements OnInit {
  @Input() node: HzTreeNode;
  @Input() expanded: boolean;
  @Input() loading: boolean;
  @Output() toggleClick = new EventEmitter<MouseEvent>();
  constructor(public store: HzTreeService) {}

  ngOnInit() {}

  onClick(event: MouseEvent) {
    this.toggleClick.emit(event);
  }
}
