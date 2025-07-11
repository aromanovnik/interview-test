import { AbstractControl, ControlValueAccessor, NgControl, Validators } from '@angular/forms';
import {
  AfterViewInit,
  computed,
  Directive,
  inject,
  Injector,
  signal,
  WritableSignal,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive()
export abstract class FormFieldDirective implements ControlValueAccessor, AfterViewInit {
  // Injections
  private _injector: Injector = inject(Injector);

  public isDisabled: WritableSignal<boolean> = signal(false);
  public isTouched: WritableSignal<boolean> = signal(false);
  public isInvalid: WritableSignal<boolean> = signal(false);
  public isRequired = computed(() => {
    return Boolean(this.formControl?.hasValidator(Validators.required));
  });

  // Private
  private _ngControl: WritableSignal<NgControl | null> = signal(null);
  private _value: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private _onChange: (value: string) => void = () => {};
  private _onTouched: () => void = () => {};

  // Accessors
  get value(): string {
    return this._value.getValue();
  }

  set value(newValue: string) {
    if (newValue !== this._value.getValue()) {
      this._value.next(newValue);

      this._onChange(newValue);
    }
  }

  get formControl(): AbstractControl | null {
    if (this._ngControl()) return this._ngControl()!.control;
    return null;
  }

  get ngControl(): NgControl | null {
    if (this._ngControl()) return this._ngControl();
    return null;
  }

  // Public methods
  public setValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value; // Use the setter instead of directly calling _onChange
    this._checkValidation();
  }

  public onBlur() {
    this._markAsTouched();
    this._checkValidation();
  }

  // Control Value Accessor
  writeValue(value: string) {
    if (value !== this._value.getValue()) this._value.next(value);
  }

  registerOnChange(fn: never) {
    this._onChange = fn;
  }

  registerOnTouched(fn: never) {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled.set(isDisabled);
  }

  // Private methods
  private _markAsTouched() {
    if (!this.isTouched()) {
      this._onTouched();
      this.isTouched.set(true);
    }
  }

  private _checkValidation() {
    this.isInvalid.set(Boolean(this.formControl?.invalid && this.isTouched()));
  }

  // Lifecycle
  ngAfterViewInit() {
    this._ngControl.set(this._injector.get(NgControl)!);
  }
}
