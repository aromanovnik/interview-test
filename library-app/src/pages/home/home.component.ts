import {Component, effect, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { loadBooks } from 'src/features/books/store/books.actions';
import { selectBooks } from 'src/features/books/store/books.selectors';
import { BooksStorageService } from 'src/features/books/services/books-storage.service';
import {Book} from 'src/entities/book.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  books: Signal<Book[]>;


  constructor(
    private store: Store,
    private storage: BooksStorageService
  ) {
    const loaded = this.storage.loadBooks();
    this.store.dispatch(loadBooks({books: loaded}));

    this.books = toSignal(this.store.select(selectBooks), {initialValue: []});

    effect(() => {
      const list = this.books();
      this.storage.saveBooks(list);
    });
  }
}
