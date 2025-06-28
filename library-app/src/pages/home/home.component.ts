import {Component, effect, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import {  loadBooks, addBook, updateBook, removeBook  } from 'src/features/books/store/books.actions';
import { selectBooks } from 'src/features/books/store/books.selectors';
import { BooksStorageService } from 'src/features/books/services/books-storage.service';
import {Book} from 'src/entities/book.model';
import { BookModalComponent } from '../../shared/components/book-modal.component';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [CommonModule, BookModalComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  books: Signal<Book[]>;
  modalOpen = signal(false);
  editBook = signal<Book | null>(null);


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

  openModal(book: Book | null = null) {
    this.editBook.set(book);
    this.modalOpen.set(true);
  }

  closeModal() {
    this.modalOpen.set(false);
    this.editBook.set(null);
  }

  saveBook(book: Book) {
    if (this.books().some(b => b.id === book.id)) {
      this.store.dispatch(updateBook({ book }));
    } else {
      this.store.dispatch(addBook({ book }));
    }
    this.closeModal();
  }

  removeBook(id: string) {
    this.store.dispatch(removeBook({ id }));
  }
}
