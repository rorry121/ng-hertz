import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzTreeNodeCheckboxComponent } from './tree-node-checkbox.component';

describe('HzTreeNodeCheckboxComponent', () => {
  let component: HzTreeNodeCheckboxComponent;
  let fixture: ComponentFixture<HzTreeNodeCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzTreeNodeCheckboxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzTreeNodeCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
