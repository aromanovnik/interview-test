import { Injectable, computed, signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BookActions from '../../../store/actions';
import { Book } from '../../../models/book.model';
import { StorageService } from '../storage.service';

@Injectable({ providedIn: 'root' })
export class BookService {
  private booksSignal = signal<Book[]>([]); // Установливаем сигнал для модели Book
  private storage = inject(StorageService);
  books = computed(() => this.booksSignal()); // Автоматический обновляем booksSignal при его изменение

  constructor(private store: Store<{ books: Book[] }>) {
    // Берем значение из localStorage
    const saved = this.storage.get('books');
    if (typeof saved === 'string') {
      try {
        const parsed = JSON.parse(saved);
        this.store.dispatch(BookActions.loadBooks({ books: parsed }));
      } catch (e) {
        console.error('Ошибка при парсинге localStorage books', e);
      }
    } else {
      console.log('Нет сохранённых книг в localStorage');
    }

    // Подписка сохраняем книгу если он изменится
    this.store.subscribe((state) => {
      this.booksSignal.set(state.books);
      this.storage.set('books', JSON.stringify(state.books));
    });
  }

  // Добавление
  add(book: Omit<Book, 'id'>) {
    this.store.dispatch(BookActions.addBook({ book: { ...book, id: Date.now() } }));
  }
  // Обновление
  update(book: Book) {
    this.store.dispatch(BookActions.updateBook({ book }));
  }
  // Удаление
  remove(id: number) {
    this.store.dispatch(BookActions.removeBook({ id }));
  }
}
