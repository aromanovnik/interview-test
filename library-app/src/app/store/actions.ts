import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book.model';

// Все наши действие для книги
export const addBook = createAction('[Book] Add Book', props<{ book: Book }>());
export const updateBook = createAction('[Book] Update Book', props<{ book: Book }>());
export const removeBook = createAction('[Book] Remove Book', props<{ id: number }>());
export const loadBooks = createAction('[Book] Load Book', props<{ books: Book[] }>());
