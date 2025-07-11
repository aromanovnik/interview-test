import { inject, Injectable } from '@angular/core';
import { BookData } from '@pages/home/views/book-form/types';
import { BookItem } from '@pages/home/components/book-item/types';
import { LocalStorageService } from '@shared/lib/services/local-storage.service';
import { LocalStorageEnum } from '@shared/lib/types/local-storage.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookService {
  private _localStorage: LocalStorageService = inject(LocalStorageService);

  private _books = new BehaviorSubject<BookItem[]>([]);

  public getAllBooks(): Observable<BookItem[]> {
    const res = this._localStorage.get<BookItem[]>(LocalStorageEnum.Books);

    if (res !== null) this._books.next(res);

    return this._books.asObservable();
  }

  public addBook(data: BookData): void {
    const id = this._getCounter();
    const newBook: BookItem = {
      id,
      ...data,
    };
    const books: BookItem[] = [...this._books.getValue()];
    books.push(newBook);

    this._localStorage.set(LocalStorageEnum.BookId, id + 1);
    this._setBooks(books);
  }

  public removeBookById(id: number): void {
    const books: BookItem[] = [...this._books.getValue()];

    const index = books.findIndex((item) => item.id === id);
    books.splice(index, 1);

    this._setBooks(books);
  }

  // Private methods
  private _getCounter(): number {
    const raw = this._localStorage.get<string>(LocalStorageEnum.BookId);
    if (!raw) return 1;
    return Number(raw);
  }

  private _setBooks(books: BookItem[]) {
    this._localStorage.set(LocalStorageEnum.Books, books);
    this._books.next(books);
  }
}
