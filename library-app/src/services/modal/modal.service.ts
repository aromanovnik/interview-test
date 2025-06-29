import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Book } from "@entities/book";
import { BookFormModalComponent } from "@features/book/ui/BookFormComponent";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openForm(book?: Book): Observable<Book | null> {
    return this.dialog.open(BookFormModalComponent, {
      data: book,
      disableClose: true,
    }).afterClosed();
  }
}

