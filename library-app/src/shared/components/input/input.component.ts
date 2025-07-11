import { Component, input } from '@angular/core';
import { getErrorMessage } from '@shared/lib/utils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldDirective } from '@shared/directives';
import { InputOptions } from '@shared/components/input/types';
import { APP_INPUT_DEFAULT_OPTIONS } from '@shared/components/input/constants/default-options';
import { inputType } from '@shared/lib/types';

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styleUrl: 'input.component.scss',
  host: { class: 'app-form-field' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent extends FormFieldDirective {
  public options = input<InputOptions, InputOptions>(APP_INPUT_DEFAULT_OPTIONS, {
    transform: this._optionsTransform,
  });
  public type = input<inputType>('text');

  // Private
  private _optionsTransform(value: InputOptions): InputOptions {
    return {
      ...APP_INPUT_DEFAULT_OPTIONS,
      ...value,
    };
  }

  protected readonly getErrorMessage = getErrorMessage;
}
