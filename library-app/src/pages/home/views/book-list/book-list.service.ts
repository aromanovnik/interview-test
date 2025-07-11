import { inject, Injectable } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { BookFormDialogComponent } from '@pages/home/dialogs/book-form-dialog/book-form-dialog.component';

@Injectable({ providedIn: 'root' })
export class BookListService {
  private _dialog = inject(Dialog);

  public openAddBookDialog() {
    const dialogRef = this._dialog.open(BookFormDialogComponent);

    dialogRef.componentInstance?.update.subscribe((res) => {
      console.log(res);
    });
  }
}
