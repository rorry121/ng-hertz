import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzTreeNodeToggleComponent } from './tree-node-toggle.component';

describe('HzTreeNodeToggleComponent', () => {
  let component: HzTreeNodeToggleComponent;
  let fixture: ComponentFixture<HzTreeNodeToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzTreeNodeToggleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzTreeNodeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
