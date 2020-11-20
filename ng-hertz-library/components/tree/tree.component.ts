import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import { HzTreeService } from './tree.service';
import { animate, AnimationTriggerMetadata, query, stagger, style, transition, trigger } from '@angular/animations';
import { HzTreeNode, HzTreeNodeOptions } from './tree.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { concatMap, debounceTime, distinctUntilChanged, finalize, map, takeUntil, tap } from 'rxjs/operators';

const treeCollapseMotion: AnimationTriggerMetadata = trigger('treeCollapseMotion', [
  transition('* => *', [
    query('hz-tree-node:leave', [style({ overflow: 'hidden' }), stagger(0, [animate(`150ms ease-in-out`, style({ height: 0 }))])], {
      optional: true
    }),
    query(
      'hz-tree-node:enter',
      [style({ overflow: 'hidden', height: 0 }), stagger(0, [animate(`150ms ease-in-out`, style({ overflow: 'hidden', height: '*' }))])],
      {
        optional: true
      }
    )
  ])
]);

@Component({
  selector: 'hz-tree',
  templateUrl: './tree.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HzTreeService],
  animations: [treeCollapseMotion],
  host: {
    '[class.hz-tree]': `true`
  }
})
export class HzTreeComponent implements OnInit, AfterViewInit, OnDestroy {
  fullTreeNodeMap: Map<string | number, HzTreeNode> = new Map([]);
  flatTreeNodeKeys: Array<string> = [];
  destroy$ = new Subject<void>();
  hzDataHandledComplete$ = new BehaviorSubject<boolean>(false);
  @Input() hzVirtualHeight: string;
  @Input() hzVirtualItemSize = 26;
  @Input() hzVirtualMinBufferPx = 26;
  @Input() hzVirtualMaxBufferPx = 520;
  @Input() hzCanActivateNode = true;
  @Input() hzEmptyPlaceholder = '暂无数据';
  @Input('hzActiveNodeKey') set activeNodeKey(value: string) {
    if (value) {
      this.store.activeNodeKey = value;
    }
  }
  @Input('hzSelectMode') set selectMode(value: boolean) {
    this.store.selectMode = value;
  }
  @Input() hzSearchModelChange: Observable<string>;
  @Input('hzData') set data(value: HzTreeNodeOptions[]) {
    if (value) {
      this.store.handleOriginTreeData(value);
      this.fullTreeNodeMap = this.store.fullTreeNodeMap;
      this.flatTreeNodeKeys = this.store.flatTreeNodeKeys;
      this.hzDataHandledComplete$.next(true);
    }
  }
  @Input('hzShowNodeToggle') set showNodeToggle(value: boolean) {
    this.store.showNodeToggle = value;
  }
  @Input('hzCheckable') set checkable(value: boolean) {
    this.store.checkable = value;
  }
  @Input('hzNodeIndent') set nodeIndent(value: number) {
    this.store.nodeIndent = value;
  }
  @Input('hzShowTreeBranch') set showTreeBranch(value: boolean) {
    this.store.showTreeBranch = value;
  }
  @Input('hzNoHoverEffect') set noHoverEffect(value: boolean) {
    this.store.noHoverEffect = value;
  }
  @Input('hzLeafNodeBranchY') set leafNodeBranchY(value: string) {
    this.store.leafNodeBranchY = value;
  }
  @Input('hzEnableWholeNodeToggle') set enableWholeNodeToggle(value: boolean) {
    this.store.enableWholeNodeToggle = value;
  }
  @Input('hzBeforeExpand') set beforeExpand(value: (node: HzTreeNode) => Observable<boolean>) {
    this.store.beforeExpand = value;
  }
  @Input('hzBeforeSelect') set beforeSelect(value: (node: HzTreeNode) => Observable<boolean>) {
    this.store.beforeSelect = value;
  }
  @Input('hzBeforeActive') set beforeActive(value: (node: HzTreeNode) => Observable<boolean>) {
    this.store.beforeActive = value;
  }
  @Input('hzNodeToggle') set nodeToggle(value: TemplateRef<{ $implicit: HzTreeNode }>) {
    this.store.nodeToggle = value;
  }
  @Input('hzNodeTemplate') set nodeTemplate(value: TemplateRef<{ $implicit: HzTreeNode }>) {
    this.store.nodeTemplate = value;
  }
  @Input('hzNodeExtraTemplate') set nodeExtraTemplate(value: TemplateRef<{ $implicit: HzTreeNode }>) {
    this.store.nodeExtraTemplate = value;
  }
  @Output() hzCheckboxChange = new EventEmitter<{ checkedList: HzTreeNode[]; node: HzTreeNode; checked: boolean }>();
  @Output() hzSelectChange = new EventEmitter<{ selectedList: HzTreeNode[]; node: HzTreeNode; selected: boolean }>();
  @Output() hzActiveNodeChange = new EventEmitter<HzTreeNode>();
  @Output() hzTreeNodeClick = new EventEmitter<HzTreeNode>();
  @Output() hzDataHandledComplete = new EventEmitter<void>();

  trackByFn = (index: number, node: HzTreeNode) => node.key;
  constructor(public store: HzTreeService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.hzDataHandledComplete$.pipe(takeUntil(this.destroy$)).subscribe(bool => {
      if (bool) {
        this.hzDataHandledComplete.emit();
      }
    });
    if (this.hzSearchModelChange) {
      this.hzSearchModelChange
        .pipe(
          debounceTime(600),
          map(text => text.trim()),
          distinctUntilChanged(),
          takeUntil(this.destroy$)
        )
        .subscribe(text => {
          this.store.queryText = text;
          this.flatTreeNodeKeys = this.store.filter(this.store.fullTreeNodeKeys, text);
          this.cdr.detectChanges();
        });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onToggleChange(node: HzTreeNode) {
    if (this.store.beforeExpand) {
      if (node.loading) {
        return;
      }
      node.loading = true;
      this.store
        .beforeExpand(node)
        .pipe(
          finalize(() => (node.loading = false)),
          takeUntil(this.destroy$)
        )
        .subscribe(bool => {
          if (bool) {
            node.expanded = !node.expanded;
            this.reloadTree();
          }
          this.cdr.markForCheck();
        });
    } else {
      if (!node.isLeaf) {
        node.expanded = !node.expanded;
        this.reloadTree();
      }
    }
  }

  reloadTree() {
    if (this.store.queryText) {
      this.store.flatTreeNodeKeys = [];
      this.store.flatFilteredTreeData(this.store.originTreeData);
      this.flatTreeNodeKeys = this.store.flatTreeNodeKeys;
    } else {
      this.store.handleOriginTreeData(this.store.originTreeData);
      this.fullTreeNodeMap = this.store.fullTreeNodeMap;
      this.flatTreeNodeKeys = this.store.flatTreeNodeKeys;
    }
  }

  onNodeClick(node: HzTreeNode) {
    if (node.disabled) {
      return;
    }
    if (this.hzCanActivateNode) {
      if (this.store.activeNodeKey !== node.key) {
        if (this.store.beforeActive) {
          this.store
            .beforeActive(node)
            .pipe(takeUntil(this.destroy$))
            .subscribe(bool => {
              if (bool) {
                this.setActiveNode(node);
              }
            });
        } else {
          this.setActiveNode(node);
        }
      }
    }
  }

  setActiveNode(node: HzTreeNode) {
    this.store.activeNodeKey = node.key;
    this.hzActiveNodeChange.emit(node);
  }

  detectChanges(): void {
    this.cdr.detectChanges();
  }

  getCheckedList(): HzTreeNode[] {
    return this.store.getCheckedList();
  }

  getSelectedList(): HzTreeNode[] {
    return this.store.getSelectedList();
  }

  getActiveNode(): HzTreeNode {
    return this.store.getActiveNode();
  }

  updateChecked(node: HzTreeNode): void {
    this.store.updateChecked(node);
  }
}
