import { Component, computed, input, InputSignal, output } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { BookFormComponent } from '@pages/home/views/book-form/book-form.component';
import { BookData } from '@pages/home/views/book-form/types';

@Component({
  selector: 'app-book-form-dialog',
  imports: [ButtonComponent, BookFormComponent],
  templateUrl: './book-form-dialog.component.html',
  styleUrl: './book-form-dialog.component.scss',
})
export class BookFormDialogComponent {
  public isUpdate: InputSignal<boolean> = input<boolean>(false);

  public update = output<BookData>();

  public dialogTitle = computed(() => {
    if (this.isUpdate()) return 'Update book data';
    else return 'Add new book';
  });

  public onUpdate(data: BookData) {
    this.update.emit(data);
  }
}
