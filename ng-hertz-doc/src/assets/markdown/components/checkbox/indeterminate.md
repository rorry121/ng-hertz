```angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hz-demo-checkbox-indeterminate',
  template: `
    <div>
      <label hz-checkbox [(ngModel)]="allChecked" [hzIndeterminate]="indeterminate" (ngModelChange)="updateAllChecked()">Check All</label>
    </div>
    <div class="mt-24">
      <label *ngFor="let item of list"
             hz-checkbox
             [(ngModel)]="item.checked"
             (ngModelChange)="updateSingleChecked()">{{item.label}}</label>
    </div>
  `,
  styles: [`
    [hz-checkbox] {
      margin-right: 16px;
    }
    .mt-24 {
      margin-top: 24px;
    }
  `]
})
export class HzDemoCheckboxIndeterminate implements OnInit {
  allChecked = false;
  indeterminate = true;
  list = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear', checked: false },
    { label: 'Orange', value: 'Orange', checked: false },
  ];
  constructor() {}

  ngOnInit() {}

  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.list = this.list.map(item => {
        return {
          ...item,
          checked: true
        };
      });
    } else {
      this.list = this.list.map(item => {
        return {
          ...item,
          checked: false
        };
      });
    }
  }

  updateSingleChecked(): void {
    if (this.list.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.list.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }
}

```