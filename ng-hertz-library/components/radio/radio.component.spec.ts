import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzRadioComponent } from './radio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('HzRadioComponent', () => {
  let component: HzRadioComponent;
  let fixture: ComponentFixture<HzRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzRadioComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
