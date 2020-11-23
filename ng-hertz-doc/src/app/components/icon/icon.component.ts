import { Component, OnInit } from '@angular/core';
import { MarkedService } from '../../container/marked/marked.service';

@Component({
  selector: 'doc-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  text = '';
  constructor(private mark: MarkedService) {}

  ngOnInit() {
    this.mark.resolveMdFile('icon/basic.md').subscribe(text => {
      this.text = this.mark.toHtml(text);
      console.log(this.text);
    });
  }
}
