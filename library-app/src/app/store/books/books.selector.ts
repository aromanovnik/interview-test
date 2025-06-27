import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../../model/book.model';

export const selectBooksFeature = createFeatureSelector<readonly Book[]>('books');

export const selectBooks = createSelector(selectBooksFeature, (books) => books);
