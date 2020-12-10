import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzSwitchComponent } from './switch.component';

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
