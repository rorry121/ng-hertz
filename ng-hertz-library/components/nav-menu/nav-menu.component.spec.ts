import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzNavMenuComponent } from './nav-menu.component';
import { HzIconModule } from '@haizhi/ng-hertz/icon';
import { RouterModule } from '@angular/router';
import { HzNavMenuModule } from './nav-menu.module';

describe('HzNavMenuComponent', () => {
  let component: HzNavMenuComponent;
  let fixture: ComponentFixture<HzNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzNavMenuComponent],
      imports: [HzIconModule, RouterModule]
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
