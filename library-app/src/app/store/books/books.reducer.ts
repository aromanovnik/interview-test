import { createReducer, on } from '@ngrx/store';
import { Book } from '../../model/book.model';
import * as BooksActions from './books.actions';

export const initialState: Book[] = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.loadBooks, (_, { books }): Book[] => books),
  on(BooksActions.addBook, (state, { book }): Book[] => [...state, book]),
  on(BooksActions.updateBook, (state, { book }): Book[] =>
    state.map((b) => (b.id === book.id ? book : b)),
  ),
  on(BooksActions.removeBook, (state, { id }): Book[] => state.filter((b) => b.id !== id)),
);
