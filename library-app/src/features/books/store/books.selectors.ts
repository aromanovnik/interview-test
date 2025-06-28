// src/features/books/store/books.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState } from './books.reducer';

export const selectBooksFeature = createFeatureSelector<BooksState>('booksFeature');

export const selectBooks = createSelector(
  selectBooksFeature,
  state => state.books
);
