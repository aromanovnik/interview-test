import { Book } from "@entities/book";
import { createAction, props } from "@ngrx/store";



export const loadBooks = createAction('[Book] Load Books');
export const loadBooksSuccess = createAction('[Book] Load Books Success', props<{ books: Book[] }>());
export const addBook = createAction('[Book] Add Book', props<{ book: Omit<Book,'id'> }>());
export const updateBook = createAction('[Book] Update Book', props<{ book: Book }>());
export const deleteBook = createAction('[Book] Delete Book', props<{ id: number }>());
