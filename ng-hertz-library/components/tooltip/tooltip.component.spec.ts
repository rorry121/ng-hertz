import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzTooltipComponent } from './tooltip.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HzTooltipComponent', () => {
  let component: HzTooltipComponent;
  let fixture: ComponentFixture<HzTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzTooltipComponent],
      imports: [BrowserAnimationsModule]
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
