import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzSwitchComponent } from './switch.component';
import { Component, ViewChild } from '@angular/core';

describe('SwitchComponent', () => {
  let component: HzSwitchComponent;
  let fixture: ComponentFixture<HzSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzSwitchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  template: `
    <hz-switch
      [(ngModel)]="checked"
      [hzDisabled]="disabled"
      [hzCheckedValue]="checkedValue"
      [hzUncheckedValue]="uncheckedValue"
    ></hz-switch>
  `
})
class HzTestSwitchComponent {
  @ViewChild(HzSwitchComponent, { static: false }) hzCheckboxComponent!: HzSwitchComponent;
  checked = false;
  disabled = false;
  checkedValue = true;
  uncheckedValue = true;
}
