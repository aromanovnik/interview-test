import { Component, computed, effect, inject, input, InputSignal, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '@shared/components/input/input.component';
import { BookData } from '@pages/home/views/book-form/types';
import { ButtonComponent } from '@shared/components/button/button.component';
import { BookItem } from '@pages/home/components/book-item/types';

@Component({
  selector: 'app-book-form',
  imports: [InputComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
})
export class BookFormComponent {
  private _formBuilder: FormBuilder = inject(FormBuilder);

  public data: InputSignal<BookItem | null> = input<BookItem | null>(null);
  public update = output<BookData>();

  public buttonText = computed(() => {
    if (this.data()) return 'Save';
    else return 'Add';
  });

  public formGroup = this._formBuilder.group({
    author: ['', [Validators.required]],
    title: ['', [Validators.required]],
    totalPages: [0, [Validators.required]],
    year: [0, [Validators.required]],
  });

  constructor() {
    effect(() => {
      const data = this.data();
      if (data !== null) {
        this._initFormValues(data);
      }
    });
  }

  public onUpdate(): void {
    const data = this.formGroup.value as unknown as BookData;
    this.update.emit(data);
  }

  // Private methods
  private _initFormValues(data: BookItem) {
    this.formGroup.patchValue(data);
  }
}
