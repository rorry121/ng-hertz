import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzCheckboxComponent } from './checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HzCheckboxModule } from './checkbox.module';

describe('CheckboxComponent', () => {
  let component: HzCheckboxComponent;
  let fixture: ComponentFixture<HzCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzCheckboxComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
