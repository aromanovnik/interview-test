import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { Book } from '../../model/book.model';
import { BooksService } from '../../services/books.service';
import * as BooksActions from './books.actions';
import { selectBooks } from './books.selector';

@Injectable()
export class BooksEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);
  private booksService = inject(BooksService);

  saveToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          BooksActions.addBook,
          BooksActions.updateBook,
          BooksActions.removeBook,
          BooksActions.loadBooks,
        ),
        withLatestFrom(this.store.select(selectBooks)),
        tap(([, books]) => {
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('books', JSON.stringify(books));
          }
        }),
      ),
    { dispatch: false },
  );

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.triggerBooksLoad),
      map(() => {
        let books: Book[] = [];

        if (typeof localStorage !== 'undefined') {
          const data = localStorage.getItem('books');
          books = data ? JSON.parse(data) : this.booksService.defaultBooks();
        } else {
          books = this.booksService.defaultBooks();
        }

        return BooksActions.loadBooks({ books });
      }),
    ),
  );
}
