import { inject, Injectable } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { BookFormDialogComponent } from '@pages/home/dialogs/book-form-dialog/book-form-dialog.component';
import { BookService } from '@shared/lib/services/book.service';

@Injectable({ providedIn: 'root' })
export class BookListService {
  private _dialog = inject(Dialog);
  private _bookService = inject(BookService);

  public openAddBookDialog() {
    const dialogRef = this._dialog.open(BookFormDialogComponent);

    dialogRef.componentInstance?.update.subscribe((res) => {
      this._bookService.addBook(res);
    });
  }
}
