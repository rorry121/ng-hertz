import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, forwardRef, ChangeDetectorRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';
import { HzSwitchValue } from './switch.model';

@Component({
  selector: 'hz-switch',
  templateUrl: './switch.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HzSwitchComponent),
      multi: true
    }
  ],
  host: {
    '(click)': `onHostClick()`
  }
})
export class HzSwitchComponent implements OnInit {
  checked: HzSwitchValue;
  @Input() hzDisabled = false;
  @Input() hzCheckedValue: HzSwitchValue = true;
  @Input() hzUnCheckedValue: HzSwitchValue = false;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  onHostClick() {
    if (this.hzDisabled) {
      return;
    }
    this.onTouched();
    if (this.checked === this.hzCheckedValue) {
      this.updateValue(this.hzUnCheckedValue);
    } else {
      this.updateValue(this.hzCheckedValue);
    }
  }

  updateValue(value: HzSwitchValue) {
    if (this.checked !== value) {
      this.checked = value;
      this.onChange(this.checked);
    }
  }

  onKeydown(event: KeyboardEvent) {
    if (this.hzDisabled) {
      return;
    }
    if (event.keyCode === LEFT_ARROW) {
      this.updateValue(this.hzUnCheckedValue);
      event.preventDefault();
    } else if (event.keyCode === RIGHT_ARROW) {
      this.updateValue(this.hzCheckedValue);
      event.preventDefault();
    } else if (event.keyCode === ENTER || event.keyCode === SPACE) {
      if (this.checked === this.hzCheckedValue) {
        this.updateValue(false);
      } else {
        this.updateValue(true);
      }
      event.preventDefault();
    }
  }

  // ------------------------------------------------------------------------
  // | Control value accessor implements
  // ------------------------------------------------------------------------

  onChange: (value: HzSwitchValue) => void = () => null;

  onTouched: () => void = () => null;

  writeValue(value: HzSwitchValue): void {
    this.checked = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (_: HzSwitchValue) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
