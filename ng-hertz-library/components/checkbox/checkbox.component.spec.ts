import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzCheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: HzCheckboxComponent;
  let fixture: ComponentFixture<HzCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzCheckboxComponent]
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
