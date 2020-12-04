import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzTabsComponent } from './tabs.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HzIconModule } from '@haizhi/ng-hertz/icon';
import { RouterTestingModule } from '@angular/router/testing';

describe('HzTabsComponent', () => {
  let component: HzTabsComponent;
  let fixture: ComponentFixture<HzTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzTabsComponent],
      imports: [RouterModule, RouterTestingModule, HzIconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
