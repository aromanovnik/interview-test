import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Book } from '@shared/lib/types';
import { inject } from '@angular/core';
import { BookStorageService } from '@shared/lib/services';

type BookState = {
  books: Book[];
};

const initialState: BookState = {
  books: []
};

export const BookStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store: any, storage: BookStorageService = inject(BookStorageService)) => ({
    getBooks(): void {
      const books: Book[] = storage.getBooks();
      patchState(store, { books });
    },
    addBook(book: Book): void {
      const books: Book[] = [...store.books(), book];
      patchState(store, { books });
      storage.saveBooks(books);
    },
    updateBook(book: Book): void {
      const books = store.books().map((b: Book): Book => b.id === book.id ? book : b);

      patchState(store, { books });
      storage.saveBooks(books);
    },
    removeBook(id: string): void {
      const books: Book[] = store.books().filter((b: Book): boolean => b.id !== id);
      books.length ? storage.saveBooks(books) : storage.clear();
      patchState(store, { books });
    },
  }))
);
