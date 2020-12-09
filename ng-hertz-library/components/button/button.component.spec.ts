import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: HzButtonComponent;
  let fixture: ComponentFixture<HzButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should size work', () => {
    expect(component).toBeTruthy();
  });
});
