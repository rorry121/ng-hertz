import { async, ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { HzCheckboxComponent } from './checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CheckboxComponent', () => {
  let fixture: ComponentFixture<HzTestCheckboxComponent>;
  let testComponent: HzTestCheckboxComponent;
  let checkbox: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzCheckboxComponent, HzTestCheckboxComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzTestCheckboxComponent);
    fixture.detectChanges();
    testComponent = fixture.debugElement.componentInstance;
    checkbox = fixture.debugElement.query(By.directive(HzCheckboxComponent));
  });

  it('should click change', () => {
    checkbox.nativeElement.click();
    expect(testComponent.checked).toBe(true);
  });

  it('should ngModel work', fakeAsync(() => {
    testComponent.checked = true;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    expect(checkbox.nativeElement.firstElementChild.classList.contains('hz-checkbox-checked')).toBe(true);
    testComponent.checked = false;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    expect(checkbox.nativeElement.firstElementChild.classList.contains('hz-checkbox-checked')).toBe(false);
  }));

  it('should disabled work', () => {
    testComponent.disabled = true;
    fixture.detectChanges();
    expect(checkbox.nativeElement.firstElementChild.classList.contains('hz-checkbox-disabled')).toBe(true);
  });

  it('should indeterminate work', () => {
    testComponent.indeterminate = true;
    fixture.detectChanges();
    expect(checkbox.nativeElement.firstElementChild.classList.contains('hz-checkbox-indeterminate')).toBe(true);
  });

  it('should autofocus work', () => {
    testComponent.autoFocus = true;
    fixture.detectChanges();
    testComponent.autoFocus = true;
    fixture.detectChanges();
    expect(checkbox.nativeElement.querySelector('input').attributes.getNamedItem('autofocus').name).toBe('autofocus');
    testComponent.autoFocus = false;
    fixture.detectChanges();
    expect(checkbox.nativeElement.querySelector('input').attributes.getNamedItem('autofocus')).toBe(null);
  });
});

@Component({
  template: `
    <label
      hz-checkbox
      [(ngModel)]="checked"
      [hzAutoFocus]="autoFocus"
      [hzIndeterminate]="indeterminate"
      [hzDisabled]="disabled"
      (ngModelChange)="modelChange($event)"
      >Checkbox</label
    >
  `
})
export class HzTestCheckboxComponent {
  @ViewChild(HzCheckboxComponent, { static: false }) hzCheckboxComponent!: HzCheckboxComponent;
  disabled = false;
  autoFocus = false;
  checked = false;
  indeterminate = false;
  modelChange = jasmine.createSpy('change callback');
}
