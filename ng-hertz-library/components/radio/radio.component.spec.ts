import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzRadioComponent } from './radio.component';

describe('HzRadioComponent', () => {
  let component: HzRadioComponent;
  let fixture: ComponentFixture<HzRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzRadioComponent]
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
