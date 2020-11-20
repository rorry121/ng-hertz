import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzNavSubmenuComponent } from './nav-submenu.component';

describe('HzNavSubmenuComponent', () => {
  let component: HzNavSubmenuComponent;
  let fixture: ComponentFixture<HzNavSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzNavSubmenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzNavSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
