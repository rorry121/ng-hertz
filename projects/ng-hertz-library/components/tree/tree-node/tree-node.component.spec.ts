import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzTreeNodeComponent } from './tree-node.component';

describe('HzTreeNodeComponent', () => {
  let component: HzTreeNodeComponent;
  let fixture: ComponentFixture<HzTreeNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzTreeNodeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
