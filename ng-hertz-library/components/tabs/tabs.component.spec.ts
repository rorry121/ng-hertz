import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzTabsComponent } from './tabs.component';

describe('HzTabsComponent', () => {
  let component: HzTabsComponent;
  let fixture: ComponentFixture<HzTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzTabsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
