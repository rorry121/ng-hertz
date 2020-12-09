import { Component, Input, OnInit } from '@angular/core';

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
  @Input() onlyMark = false;
  constructor() {}

  ngOnInit() {
    this.tocId = this.src.match(/\/(\S*).md/)[1];
  }

  onTabsIndexChange(index: number) {
    if (index === 1 && !this.loadCode) {
      this.loadCode = true;
    }
  }
}
