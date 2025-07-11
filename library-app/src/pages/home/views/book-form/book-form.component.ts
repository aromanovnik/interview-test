import { Component, computed, inject, input, InputSignal, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '@shared/components/input/input.component';
import { BookData } from '@pages/home/views/book-form/types';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-book-form',
  imports: [InputComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
})
export class BookFormComponent {
  private _formBuilder: FormBuilder = inject(FormBuilder);

  public isUpdate: InputSignal<boolean> = input<boolean>(false);
  public update = output<BookData>();

  public buttonText = computed(() => {
    if (this.isUpdate()) return 'Save';
    else return 'Add';
  });

  public formGroup = this._formBuilder.group({
    author: ['', [Validators.required]],
    title: ['', [Validators.required]],
    totalPages: ['', [Validators.required]],
    year: ['', [Validators.required]],
  });

  public onUpdate(): void {
    const data = this.formGroup.value as unknown as BookData;
    this.update.emit(data);
  }
}
