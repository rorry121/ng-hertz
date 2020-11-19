import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzNavMenuComponent } from './nav-menu.component';

describe('HzNavMenuComponent', () => {
  let component: HzNavMenuComponent;
  let fixture: ComponentFixture<HzNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzNavMenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
