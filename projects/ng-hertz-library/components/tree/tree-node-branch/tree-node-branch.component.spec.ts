import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzTreeNodeBranchComponent } from './tree-node-branch.component';

describe('HzTreeNodeBranchComponent', () => {
  let component: HzTreeNodeBranchComponent;
  let fixture: ComponentFixture<HzTreeNodeBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzTreeNodeBranchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzTreeNodeBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
