import { Component, computed, inject, output } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { BookFormComponent } from '@pages/home/views/book-form/book-form.component';
import { BookData } from '@pages/home/views/book-form/types';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { BookItem } from '@pages/home/components/book-item/types';

@Component({
  selector: 'app-book-form-dialog',
  imports: [ButtonComponent, BookFormComponent],
  templateUrl: './book-form-dialog.component.html',
  styleUrl: './book-form-dialog.component.scss',
})
export class BookFormDialogComponent {
  private _dialogRef = inject(DialogRef);
  private _dialogData: BookItem = inject(DIALOG_DATA);

  public data = computed(() => {
    return this._dialogData;
  });

  public update = output<BookData>();

  public dialogTitle = computed(() => {
    if (this.data()) return 'Update book data';
    else return 'Add new book';
  });

  public onUpdate(data: BookData) {
    this.update.emit(data);
  }

  public close() {
    this._dialogRef.close();
  }
}
