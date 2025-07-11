import { Component, inject } from '@angular/core';
import { BookItemComponent } from '@pages/home/components/book-item/book-item.component';
import { BookService } from '@shared/lib/services/book.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-list',
  imports: [BookItemComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  private _bookService = inject(BookService);

  public items = toSignal(this._bookService.getAllBooks());
}
