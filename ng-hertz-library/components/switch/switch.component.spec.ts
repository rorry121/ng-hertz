import { async, ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';

import { HzSwitchComponent } from './switch.component';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HzSwitchValue } from './switch.model';

describe('SwitchComponent', () => {
  let fixture: ComponentFixture<HzTestSwitchComponent>;
  let testComponent: HzTestSwitchComponent;
  let switchElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzSwitchComponent, HzTestSwitchComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzTestSwitchComponent);
    fixture.detectChanges();
    testComponent = fixture.debugElement.componentInstance;
    switchElement = fixture.debugElement.query(By.directive(HzSwitchComponent));
  });
  it('should ngModel work', fakeAsync(() => {
    testComponent.checked = true;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    console.log(switchElement.nativeElement);
    expect(switchElement.nativeElement.firstElementChild.classList.contains('hz-switch-btn-checked')).toBe(true);
    testComponent.checked = false;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    expect(switchElement.nativeElement.firstElementChild.classList.contains('hz-switch-btn-checked')).toBe(false);
  }));

  it('should disabled work', () => {
    testComponent.checked = false;
    testComponent.disabled = true;
    fixture.detectChanges();
    switchElement.nativeElement.click();
    fixture.detectChanges();
    expect(testComponent.checked).toBe(false);
    expect(switchElement.nativeElement.firstElementChild.classList.contains('hz-switch-btn-disabled')).toBe(true);
  });

  it('should hzCheckedValue and hzUncheckedValue work', fakeAsync(() => {
    testComponent.checkedValue = 1;
    testComponent.uncheckedValue = 0;
    testComponent.checked = 1;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    console.log(switchElement.nativeElement.firstElementChild);
    expect(switchElement.nativeElement.firstElementChild.classList.contains('hz-switch-btn-checked')).toBe(true);
    switchElement.nativeElement.click();
    fixture.detectChanges();
    expect(testComponent.checked).toBe(0);
    expect(switchElement.nativeElement.firstElementChild.classList.contains('hz-switch-btn-checked')).toBe(false);
    switchElement.nativeElement.click();
    fixture.detectChanges();
    expect(testComponent.checked).toBe(1);
    expect(switchElement.nativeElement.firstElementChild.classList.contains('hz-switch-btn-checked')).toBe(true);
    testComponent.checkedValue = 'on';
    testComponent.uncheckedValue = 'off';
    testComponent.checked = undefined;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    expect(switchElement.nativeElement.firstElementChild.classList.contains('hz-switch-btn-checked')).toBe(false);
    switchElement.nativeElement.click();
    fixture.detectChanges();
    expect(testComponent.checked).toBe('on');
    expect(switchElement.nativeElement.firstElementChild.classList.contains('hz-switch-btn-checked')).toBe(true);
    switchElement.nativeElement.click();
    fixture.detectChanges();
    expect(testComponent.checked).toBe('off');
    expect(switchElement.nativeElement.firstElementChild.classList.contains('hz-switch-btn-checked')).toBe(false);
  }));
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
  @ViewChild(HzSwitchComponent, { static: false }) hzSwitchComponent!: HzSwitchComponent;
  checked: HzSwitchValue = false;
  disabled = false;
  checkedValue: HzSwitchValue = true;
  uncheckedValue: HzSwitchValue = true;
}
