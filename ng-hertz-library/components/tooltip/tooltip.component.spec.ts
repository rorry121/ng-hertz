import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzTooltipComponent } from './tooltip.component';

describe('HzTooltipComponent', () => {
  let component: HzTooltipComponent;
  let fixture: ComponentFixture<HzTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzTooltipComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
