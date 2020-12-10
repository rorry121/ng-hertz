import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HzButtonComponent } from './button.component';
import { Component } from '@angular/core';
import { HzButtonShape, HzButtonSize, HzButtonType } from './button.model';
import { By } from '@angular/platform-browser';

describe('button', () => {
  let component: HzTestButtonComponent;
  let fixture: ComponentFixture<HzTestButtonComponent>;
  let testComponent: HzTestButtonComponent;
  let buttonElement: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HzButtonComponent, HzTestButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HzTestButtonComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    testComponent = fixture.debugElement.componentInstance;
    buttonElement = fixture.debugElement.query(By.directive(HzButtonComponent)).nativeElement;
  });

  it('should apply classname', () => {
    expect(buttonElement.classList.contains('hz-btn')).toBe(true);
  });

  it('should  apply classname by size', () => {
    testComponent.size = 'xs';
    fixture.detectChanges();
    expect(buttonElement.classList.contains('hz-btn-extra-small')).toBe(true);
    testComponent.size = 's';
    fixture.detectChanges();
    expect(buttonElement.classList.contains('hz-btn-small')).toBe(true);
    testComponent.size = 'm';
    fixture.detectChanges();
    expect(buttonElement.classList.contains('hz-btn-medium')).toBe(true);
    testComponent.size = 'l';
    fixture.detectChanges();
    expect(buttonElement.classList.contains('hz-btn-large')).toBe(true);
    expect(component).toBeTruthy();
  });

  it('should  apply classname by type', () => {
    testComponent.type = 'primary';
    fixture.detectChanges();
    expect(buttonElement.classList.contains('hz-btn-primary')).toBe(true);
    testComponent.type = 'success';
    fixture.detectChanges();
    expect(buttonElement.classList.contains('hz-btn-success')).toBe(true);
    testComponent.type = 'warning';
    fixture.detectChanges();
    expect(buttonElement.classList.contains('hz-btn-warning')).toBe(true);
    testComponent.type = 'danger';
    fixture.detectChanges();
    expect(buttonElement.classList.contains('hz-btn-danger')).toBe(true);
    testComponent.type = 'outline';
    fixture.detectChanges();
    expect(buttonElement.classList.contains('hz-btn-outline')).toBe(true);
    testComponent.type = 'text';
    fixture.detectChanges();
    expect(buttonElement.classList.contains('hz-btn-text')).toBe(true);
    testComponent.type = 'link';
    fixture.detectChanges();
    expect(buttonElement.classList.contains('hz-btn-link')).toBe(true);
    testComponent.type = 'action';
    fixture.detectChanges();
    expect(buttonElement.classList.contains('hz-btn-action')).toBe(true);
  });

  it('should  apply classname by shape', () => {
    testComponent.shape = 'circle';
    fixture.detectChanges();
    expect(buttonElement.classList.contains('hz-btn-circle')).toBe(true);
    testComponent.shape = 'block';
    fixture.detectChanges();
    expect(buttonElement.classList.contains('hz-btn-block')).toBe(true);
  });
});

@Component({
  template: ` <button hz-button [hzType]="type" [hzSize]="size" [hzShape]="shape">test</button> `
})
export class HzTestButtonComponent {
  type: HzButtonType;
  size: HzButtonSize;
  shape: HzButtonShape;
}
