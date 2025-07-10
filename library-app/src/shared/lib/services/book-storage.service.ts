import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Book } from '@shared/lib/types';

const STORAGE_KEY: string = 'books';

@Injectable({ providedIn: 'root' })
export class BookStorageService {
  private platformId: any = inject(PLATFORM_ID);
  private isBrowser: boolean = isPlatformBrowser(this.platformId);

  private get storage(): Storage | null {
    return this.isBrowser ? localStorage : null;
  }

  getBooks(): Book[] {
    const json: string | null | undefined = this.storage?.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  }

  saveBooks(books: Book[]): void {
    this.storage?.setItem(STORAGE_KEY, JSON.stringify(books));
  }

  clear(): void {
    this.storage?.removeItem(STORAGE_KEY);
  }
}
