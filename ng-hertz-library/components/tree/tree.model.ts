// import { HzSafeAny } from '@haizhi/ng-hertz/core/types';

export interface HzTreeNodeOptions<T = HzSafeAny> {
  title: string;
  key: string;
  isLeaf?: boolean;
  checked?: boolean;
  selected?: boolean;
  disabled?: boolean;
  disableCheckbox?: boolean;
  loading?: boolean;
  expanded?: boolean;
  parentKey?: string;
  children?: HzTreeNodeOptions[];
  origin?: T;
  [key: string]: HzSafeAny;
}

export interface HzTreeNode<T = HzSafeAny> extends HzTreeNodeOptions {
  level?: number;
  indeterminate?: boolean;
  origin?: T;
  children?: HzTreeNode[];
  isEnd?: boolean[];
  isStart?: boolean[];
}

// tslint:disable-next-line:no-any
type HzSafeAny = any;
