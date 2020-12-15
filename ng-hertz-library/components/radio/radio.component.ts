import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, Input, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: '[hz-radio]',
  templateUrl: './radio.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HzRadioComponent),
      multi: true
    }
  ],
  host: {
    '[class.hz-radio-wrapper]': 'true',
    '[class.hz-radio-wrapper-disabled]': 'hzDisabled'
  }
})
export class HzRadioComponent implements OnInit, ControlValueAccessor {
  checked: boolean;
  value: any;
  @Input() hzDisabled = false;
  @Input() hzValue: any;
  @Input() hzName: string;
  @Input() hzAutoFocus = false;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  onModelChange(event: any) {
    console.log('onModelChange', event);
    if (!this.hzDisabled) {
      this.updateValue(event);
    }
  }

  updateValue(value: any) {
    if (!this.hzDisabled) {
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
    this.checked = this.hzValue === value;
    this.value = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (_: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
