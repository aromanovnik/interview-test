import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookService } from '@shared/lib/services/book.service';
import books from '../assets/mockDB/books.json';
import { isPlatformBrowser } from '@angular/common';
import { LocalStorageEnum } from '@shared/lib/types/local-storage.enum';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private _bookService = inject(BookService);
  private _platformId = inject(PLATFORM_ID);

  private _initBooks(): void {
    if (isPlatformBrowser(this._platformId)) {
      const storageBooks = localStorage.getItem(LocalStorageEnum.Books);
      if (storageBooks !== null) return;

      for (const book of books) {
        this._bookService.addBook(book);
      }
    }
  }

  ngOnInit() {
    this._initBooks();
  }
}
