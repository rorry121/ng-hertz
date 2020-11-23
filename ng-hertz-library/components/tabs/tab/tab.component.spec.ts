import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzTabComponent } from './tab.component';

describe('HzTabComponent', () => {
  let component: HzTabComponent;
  let fixture: ComponentFixture<HzTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
