import {
  AfterViewInit,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { BestsellerDirective } from '../../app/directives/bestseller.directive';
import { Book } from '../../app/model/book.model';
import { BestsellerPipe } from '../../app/pipes/bestseller.pipe';
import * as BooksActions from '../../app/store/books/books.actions'; // не забудь импорт
import { selectBooks } from '../../app/store/books/books.selector';
import { BookModalComponent } from './modal/book-modal.component';

@Component({
  selector: 'app-book',
  imports: [BookModalComponent, BestsellerDirective, BestsellerPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent implements AfterViewInit {
  private store = inject(Store);
  // Signal, получающий книги из store через селектор
  books = computed(() => this.store.selectSignal(selectBooks)());

  selectedBook: Book | null = null;
  showModal = false;

  visibleBooks = signal<Book[]>([]);
  private batchSize = 12; // размер партии книг
  @ViewChild('observerTarget') observerTarget!: ElementRef; // элемент для наблюдения

  constructor() {
    this.store.dispatch(BooksActions.triggerBooksLoad());

    // Подгружаем первую партию книг
    effect(() => {
      this.visibleBooks.set(this.books().slice(0, this.batchSize));
    });
  }

  ngAfterViewInit() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }
    setTimeout(() => {
      // создаем observer если его пересекают\в поле видимости экрана то вызываем метод подгруздки книг
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.loadMoreBooks();
          }
        });
      });

      // observer следить за элементом observerTarget
      if (this.observerTarget?.nativeElement && observer) {
        observer.observe(this.observerTarget.nativeElement);
      }
    });
  }

  loadMoreBooks() {
    const allBooks = this.books();
    const start = this.visibleBooks().length;
    const nextBatch = allBooks.slice(start, start + this.batchSize);

    if (nextBatch.length > 0) {
      this.visibleBooks.set([...this.visibleBooks(), ...nextBatch]); // подгружаем новые книги
    }
  }

  onRemove(bookId: number): void {
    this.store.dispatch(BooksActions.removeBook({ id: bookId }));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  openEditModal(book: Book) {
    this.selectedBook = book;
    this.showModal = true;
  }
}
