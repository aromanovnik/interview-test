// src/features/books/store/books.actions.ts
import { createAction, props } from '@ngrx/store';
import { Book } from 'src/entities/book.model';

export const loadBooks = createAction(
  '[Books] Load Books',
  props<{ books: Book[] }>()
);

export const addBook = createAction(
  '[Books] Add Book',
  props<{ book: Book }>()
);

export const updateBook = createAction(
  '[Books] Update Book',
  props<{ book: Book }>()
);

export const removeBook = createAction(
  '[Books] Remove Book',
  props<{ id: string }>()
);
