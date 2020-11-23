import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MarkedService } from './marked.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'doc-marked',
  templateUrl: './marked.component.html',
  styleUrls: ['./marked.component.scss']
})
export class MarkedComponent implements OnInit {
  markedDone$ = new Subject<void>();
  @Input() src: string;
  @ViewChild('markedWrap', { static: true }) markedWrap: ElementRef<HTMLElement>;
  constructor(private markedService: MarkedService) {}

  ngOnInit() {
    if (this.src) {
      this.markedService.resolveMdFile(this.src).subscribe(text => {
        const html = this.toHtml(text);
        this.appendHtml(html);
        this.markedDone$.next();
        this.markedDone$.complete();
      });
    }
  }

  toHtml(text: string) {
    return this.markedService.toHtml(text);
  }

  appendHtml(html: string) {
    this.markedWrap.nativeElement.innerHTML = html;
  }
}
