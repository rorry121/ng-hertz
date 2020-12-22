import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-radio-disabled',
  template: `
    <div>
      <label hz-radio hzValue="A" [(ngModel)]="letter" (ngModelChange)="onModelChange($event)">A</label>
      <label hz-radio hzValue="B" [(ngModel)]="letter" (ngModelChange)="onModelChange($event)">B</label>
      <label hz-radio hzValue="C" [(ngModel)]="letter" (ngModelChange)="onModelChange($event)">C</label>
      <label hz-radio hzValue="D" [(ngModel)]="letter" (ngModelChange)="onModelChange($event)" [hzDisabled]="true">D</label>
    </div>
  `,
  styles: [
    `
      [hz-radio] {
        margin-right: 24px;
      }
    `
  ]
})
export class HzDemoRadioDisabled implements OnInit {
  number = 2;
  letter = 'D';
  constructor() {}

  ngOnInit() {}

  onModelChange(num: number) {
    console.log(num, this.number, this.letter);
  }

  show() {
    console.log(this.number);
  }
}
