import { HttpClient } from "@angular/common/http";
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { Book } from "@entities/book";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { isPlatformBrowser } from "@angular/common";

const STORAGE_KEY = 'mock_books';

@Injectable({ providedIn: 'root' })
export class BookApi {
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  private getFromStorage(): Book[] {
    if (this.isBrowser()) {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  }

  private saveToStorage(books: Book[]) {
    if (this.isBrowser()) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    }
  }

  fetchAll(): Observable<Book[]> {
    const saved = this.getFromStorage();
    if (saved.length) return of(saved);

    return this.http.get<Book[]>('assets/books.json').pipe(
      tap(books => this.saveToStorage(books)),
      map(books => books)
    );
  }

  create(book: Omit<Book, 'id'>): Observable<Book> {
    const books = this.getFromStorage();
    const newBook: Book = {
      ...book,
      id: this.generateId(books),
    };
    books.push(newBook);
    this.saveToStorage(books);
    return of(newBook);
  }

  update(book: Book): Observable<Book> {
    const books = this.getFromStorage().map(b => (b.id === book.id ? book : b));
    this.saveToStorage(books);
    return of(book);
  }

  delete(id: number): Observable<void> {
    const books = this.getFromStorage().filter(book => book.id !== id);
    this.saveToStorage(books);
    return of(void 0);
  }

  private generateId(books: Book[]): number {
    return books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
  }
}
