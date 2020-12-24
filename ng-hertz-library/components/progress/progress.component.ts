import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { HzSafeAny } from '@haizhi/ng-hertz/core/types';

@Component({
  selector: 'hz-progress',
  templateUrl: './progress.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.width]': `'100%'`
  }
})
export class HzProgressComponent implements OnInit {
  trailPathStyle: { [key: string]: HzSafeAny };
  stokePathStyle: { [key: string]: HzSafeAny };
  radius: number;
  perimeter: number;
  pathD: string;
  percent: number;
  @Input() hzType: 'line' | 'circle' = 'line';
  @Input() hzStatus: 'info' | 'success' | 'error' | 'warning' = 'info';
  @Input() hzStrokeColor;
  @Input() hzTrailColor;
  @Input() hzStrokeOpacity;
  @Input() hzTrailOpacity;
  @Input() hzStrokeWidth = 6;
  @Input('hzPercent') set hzPercent(value) {
    this.percent = value || 0;
    this.makeStokePathStyle();
  }
  get hzPercent() {
    return this.percent;
  }
  @Input() hzStrokeLinecap: 'round' | 'square' | 'butt' = 'round';
  constructor() {}

  ngOnInit() {
    this.radius = 50 - this.hzStrokeWidth / 2;
    this.perimeter = Math.PI * this.radius * 2;
    this.pathD = this.makePathD();
    this.makeStokePathStyle();
  }

  makeStokePathStyle() {
    this.stokePathStyle = {
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
      strokeDasharray: `${(this.perimeter * this.hzPercent) / 100}px ${this.perimeter}px`
    };
  }

  makePathD() {
    return `
        M 50 50
        m 0 -${this.radius}
        a ${this.radius} ${this.radius} 0 1 1 0 ${2 * this.radius}
        a ${this.radius} ${this.radius} 0 1 1 0 -${2 * this.radius}
    `;
  }
}
