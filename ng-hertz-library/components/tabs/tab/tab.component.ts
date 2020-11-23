import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  TemplateRef,
  ContentChildren,
  ContentChild,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'hz-tab',
  templateUrl: './tab.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HzTabComponent implements OnInit, AfterViewInit {
  // tslint:disable-next-line:variable-name
  _title: string | TemplateRef<void>;
  contentType: 'string' | 'template';
  @Input() set hzTabTitle(value: string | TemplateRef<void>) {
    this._title = value;
    if (typeof value === 'string') {
      this.contentType = 'string';
    } else if (value instanceof TemplateRef) {
      this.contentType = 'template';
    }
  }
  get hzTabTitle() {
    return this._title;
  }
  @ViewChild('templateRef', { static: false }) templateRef: TemplateRef<void>;
  @ContentChild('lazyTemplate', { static: false }) lazyTemplate: TemplateRef<void>;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
