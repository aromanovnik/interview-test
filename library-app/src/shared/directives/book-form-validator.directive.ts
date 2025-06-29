import { Directive, Input } from "@angular/core";
import { BookApi } from "@features/book/api/book.api";
import {
    AbstractControl,
    ValidationErrors,
    Validator,
    NG_VALIDATORS
  } from '@angular/forms';

@Directive({
    selector: '[bookFormValidator]',
  })
  export class BookFormValidatorDirective implements Validator {
    @Input('bookFormValidator') field!: string;
  
    constructor(private bookService: BookApi) {}
  
    validate(control: AbstractControl): ValidationErrors | null {
      const value = control.value?.toLowerCase();
  
      if (this.field === 'title' && value?.includes('banned')) {
        return { bannedTitle: true };
      }
  
      if (this.field === 'author' && value === 'hitler') {
        return { bannedAuthor: true };
      }
  
      return null;
    }
  }
  