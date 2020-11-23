import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'doc-code-box',
  templateUrl: './code-box.component.html',
  styleUrls: ['./code-box.component.scss']
})
export class CodeBoxComponent implements OnInit {
  tocId: string;
  loadCode = false;
  @Input() src: string;
  @Input() title: string;
  @Input() subtitle: string;
  constructor() {}

  ngOnInit() {
    this.tocId = this.src.match(/\/(\S*).md/)[1];
    console.log(this.tocId);
  }

  onTabsIndexChange(index: number) {
    if (index === 1 && !this.loadCode) {
      this.loadCode = true;
    }
  }
}
