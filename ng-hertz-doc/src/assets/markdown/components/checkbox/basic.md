```angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-checkbox-basic',
  template: `
    <div>
      <ng-container *ngFor="let item of list; let i = index">
        <label hz-checkbox [(ngModel)]="item.checked" (ngModelChange)="onModelChange($event, item)">{{item.label}}</label>
      </ng-container>
    </div>
  `,
  styles: [`
    [hz-checkbox] {
      margin-right: 16px;
    }
  `]
})
export class HzDemoCheckboxBasic implements OnInit {
  list = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear', checked: false },
    { label: 'Orange', value: 'Orange', checked: false },
  ];
  constructor() {}

  ngOnInit() {}

  onModelChange(checked: boolean, item) {
    console.log(checked, item);
  }
}

```