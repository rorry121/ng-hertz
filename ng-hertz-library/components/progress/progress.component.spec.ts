import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzProgressComponent } from './progress.component';

describe('ProgressComponent', () => {
  let component: HzProgressComponent;
  let fixture: ComponentFixture<HzProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzProgressComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
