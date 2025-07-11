import { inject, Injectable } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { BookFormDialogComponent } from '@pages/home/dialogs/book-form-dialog/book-form-dialog.component';
import { BookService } from '@shared/lib/services/book.service';
import { BookItem } from '@pages/home/components/book-item/types';

@Injectable({ providedIn: 'root' })
export class BookListService {
  private _dialog = inject(Dialog);
  private _bookService = inject(BookService);

  public openBookFormDialog(data?: BookItem) {
    const dialogRef = this._dialog.open(BookFormDialogComponent, {
      data,
    });

    dialogRef.componentInstance?.update.subscribe((res) => {
      if (data) this._bookService.updateBook(data.id, res);
      else this._bookService.addBook(res);
    });
  }
}
