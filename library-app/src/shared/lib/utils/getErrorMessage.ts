import { AbstractControl } from '@angular/forms';
import { getValidatorErrorMessage } from '@shared/lib/utils/getValidatorErrorMessage';

export const getErrorMessage = (formControl: AbstractControl | null): string => {
  if (formControl === null) return '';
  if (formControl.touched) return getValidatorErrorMessage(formControl.errors);
  else return '';
};
