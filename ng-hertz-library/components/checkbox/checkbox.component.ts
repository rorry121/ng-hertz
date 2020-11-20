import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  forwardRef,
  Input,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';

@Component({
  selector: '[hz-checkbox]',
  templateUrl: './checkbox.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HzCheckboxComponent),
      multi: true
    }
  ],
  host: {
    '[class.hz-checkbox-wrapper]': 'true',
    '[class.hz-checkbox-wrapper-disabled]': 'hzDisabled'
  }
})
export class HzCheckboxComponent implements OnInit, AfterViewInit, ControlValueAccessor {
  checked;
  @Input() hzDisabled = false;
  @Input() hzIndeterminate = false;
  @Input() hzAutoFocus = false;
  @ViewChild('inputElement', { static: true }) inputElement: ElementRef<HTMLInputElement>;
  @HostListener('click') onHostClick() {
    this.focus();
  }
  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef, private focusMonitor: FocusMonitor) {}

  ngOnInit() {
    this.focusMonitor.monitor(this.elementRef, true).subscribe(origin => {
      if (!origin) {
        Promise.resolve().then(() => this.onTouched());
      }
    });
  }

  ngAfterViewInit(): void {}

  focus() {
    this.focusMonitor.focusVia(this.inputElement, 'program');
  }

  blur() {
    this.inputElement.nativeElement.blur();
  }

  onModelChange(event: boolean) {
    if (!this.hzDisabled) {
      this.hzIndeterminate = false;
      this.updateValue(event);
    }
  }

  onKeydown(event: KeyboardEvent) {
    if (event.keyCode === ENTER || event.keyCode === SPACE) {
      this.updateValue(!this.checked);
      event.preventDefault();
    }
  }

  updateValue(value: boolean) {
    if (!this.hzDisabled && this.checked !== value) {
      this.writeValue(value);
      this.onChange(value);
    }
  }

  // ------------------------------------------------------------------------
  // | Control value accessor implements
  // ------------------------------------------------------------------------

  onChange: (value: boolean) => void = () => null;

  onTouched: () => void = () => null;

  writeValue(value: boolean): void {
    this.checked = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (_: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
