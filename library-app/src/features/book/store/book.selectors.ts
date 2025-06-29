import { createFeatureSelector, createSelector } from "@ngrx/store";

import type { State } from './book.reducer'

export const selectState = createFeatureSelector<State>('book');
export const selectBooks = createSelector(selectState, s => s.books);
export const selectLoading = createSelector(selectState, s => s.loading);
