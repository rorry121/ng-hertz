import { Input, Renderer2, ElementRef, Directive, SimpleChanges, OnChanges } from '@angular/core';
import { HzIconService } from './icon.service';

@Directive({
  selector: '[hz-icon]',
  exportAs: 'hzIcon',
  host: {
    '[class.hz-icon]': 'true',
    '[style.color]': 'hzColor',
    '[style.fontSize]': 'hzSize',
    '[style.transform]': 'hzRotate ? ("transform: rotate(" + hzRotate+ "deg)") : null'
  }
})
export class HzIconDirective implements OnChanges {
  @Input() hzName: string;
  @Input() hzColor: string;
  @Input() hzSize: string;
  @Input() hzRotate: string;
  constructor(private iconService: HzIconService, private renderer: Renderer2, private element: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hzName) {
      console.log('changes.hzName', changes.hzName);
      this.iconService.getIconRequest(this.hzName).subscribe(svg => {
        this.element.nativeElement.innerHTML = svg;
      });
    }
  }
}
