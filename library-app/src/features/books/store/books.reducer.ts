// src/features/books/store/books.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { Book } from 'src/entities/book.model';
import { addBook, updateBook, removeBook, loadBooks } from './books.actions';

export interface BooksState {
  books: Book[];
}

export const initialState: BooksState = {
  books: [],
};

export const booksReducer = createReducer(
  initialState,
  on(loadBooks, (state, { books }) => ({
    ...state,
    books,
  })),
  on(addBook, (state, { book }) => ({
    ...state,
    books: [...state.books, book],
  })),
  on(updateBook, (state, { book }) => ({
    ...state,
    books: state.books.map(b => (b.id === book.id ? book : b)),
  })),
  on(removeBook, (state, { id }) => ({
    ...state,
    books: state.books.filter(b => b.id !== id),
  }))
);
