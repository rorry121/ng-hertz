import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Renderer2, ElementRef } from '@angular/core';
import { HzButtonShape, HzButtonSize, HzButtonType } from '@haizhi/ng-hertz/button/button.model';

@Component({
  selector: 'button[hz-button], a[hz-button]',
  templateUrl: './button.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.hz-btn]': `true`,
    '[class.hz-btn-primary]': `hzType === 'primary'`,
    '[class.hz-btn-success]': `hzType === 'success'`,
    '[class.hz-btn-warning]': `hzType === 'warning'`,
    '[class.hz-btn-danger]': `hzType === 'danger'`,
    '[class.hz-btn-outline]': `hzType === 'outline'`,
    '[class.hz-btn-text]': `hzType === 'text'`,
    '[class.hz-btn-link]': `hzType === 'link'`,
    '[class.hz-btn-action]': `hzType === 'action'`,
    '[class.hz-btn-icon-only]': `hzType === 'action'`,
    '[class.hz-btn-circle]': `hzShape === 'circle'`,
    '[class.hz-btn-block]': `hzShape === 'block'`,
    '[class.hz-btn-extra-small]': `hzSize === 'xs'`,
    '[class.hz-btn-small]': `hzSize === 's'`,
    '[class.hz-btn-medium]': `hzSize === 'm'`,
    '[class.hz-btn-large]': `hzSize === 'l'`
  }
})
export class HzButtonComponent implements OnInit {
  @Input() hzType: HzButtonType = 'primary';
  @Input() hzShape: HzButtonShape = 'default';
  @Input() hzSize: HzButtonSize = 's';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
  }

  insertSpan(nodes: NodeList, renderer: Renderer2): void {
    nodes.forEach(node => {
      if (node.nodeName === '#text') {
        const span = renderer.createElement('span');
        const parent = renderer.parentNode(node);
        renderer.insertBefore(parent, span, node);
        renderer.appendChild(span, node);
      }
    });
  }
}
