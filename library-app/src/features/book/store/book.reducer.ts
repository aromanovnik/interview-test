import { Book } from "@entities/book";
import { createReducer, on } from "@ngrx/store";
import { loadBooks, loadBooksSuccess } from "./book.actions";

export interface State {
    books: Book[];
    loading: boolean;
}

export const initialState: State = { books: [], loading: false };
  
export const reducer = createReducer(
    initialState,
    on(loadBooks, state => ({ ...state, loading: true })),
    on(loadBooksSuccess, (state, { books }) => ({ ...state, books, loading: false })),
);
  