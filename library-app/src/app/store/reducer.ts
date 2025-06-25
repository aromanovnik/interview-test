import { createReducer, on } from '@ngrx/store';
import { Book } from '../models/book.model';
import * as BookActions from './actions';

// Состояние книги
export const initialState: Book[] = [];

// Меняем состояние книги
export const bookReducer = createReducer(
  initialState, // Первоначальная состояние
  on(BookActions.loadBooks, (_, { books }) => [...books]), // Загрузка
  on(BookActions.addBook, (state, { book }) => {
    console.log('Добавляем книгу:', book);
    return [...state, book];
  }), // Добавление
  on(BookActions.updateBook, (state, { book }) => state.map((b) => (b.id === book.id ? book : b))), // Обновление
  on(BookActions.removeBook, (state, { id }) => state.filter((b) => b.id !== id)), // Удаление
);
