import { OnInit, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { OverLayPlacement } from '@haizhi/ng-hertz/core/overlay';
import { Subject } from 'rxjs';
import { HzSafeAny } from '@haizhi/ng-hertz/core/types';

export abstract class HzTooltipBaseComponent implements OnInit {
  _content: string | TemplateRef<void>;
  contentType: 'string' | 'template';
  show = true;
  placement: OverLayPlacement;
  type: 'default' | 'info' = 'default';
  afterCloseAnimation$ = new Subject<void>();
  // state: 'enter' | 'leave' = 'enter';
  showArrow = true;
  width: string;
  maxWidth: string;
  set content(value: string | TemplateRef<void>) {
    this._content = value;
    if (typeof value === 'string') {
      this.contentType = 'string';
    } else if (value instanceof TemplateRef) {
      this.contentType = 'template';
    }
  }
  get content() {
    return this._content;
  }
  protected constructor(protected cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  updatePlacement(placement: OverLayPlacement) {
    this.placement = placement;
    this.cdr.detectChanges();
  }

  startCloseAnimation() {
    this.show = false;
    this.cdr.detectChanges();
  }

  onAnimationEvent(event: HzSafeAny) {
    if (event.toState === 'void') {
      this.afterCloseAnimation$.next();
      this.afterCloseAnimation$.complete();
    }
  }

  detectChanges() {
    this.cdr.detectChanges();
  }
}
