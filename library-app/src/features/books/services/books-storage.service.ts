import { Injectable, inject } from '@angular/core';
import { Book } from '@entities/book.model';

const STORAGE_KEY = 'books';

@Injectable({
  providedIn: 'root',
})
export class BooksStorageService {
  private isBrowser = typeof window !== 'undefined';

  loadBooks(): Book[] {

    if (!this.isBrowser) return [];
    const data = localStorage.getItem(STORAGE_KEY);
    console.log(data)
    return data ? JSON.parse(data) : [];
  }

  saveBooks(books: Book[]): void {
    if (!this.isBrowser) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }
}
