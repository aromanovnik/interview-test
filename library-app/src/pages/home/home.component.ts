import { Component, inject } from '@angular/core';
import { Book } from '@shared/lib/types';
import { BookModalComponent } from '@shared/components';
import { BookStore } from '@shared/lib/store';

@Component({
  selector: 'app-home',
  imports: [
    BookModalComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export class HomeComponent {
  store = inject(BookStore);
  showModal: boolean = false;
  editingBook: Book | null = null;

  constructor() {
    this.store.getBooks();
  }

  get books() {
    return this.store.books();
  }

  protected openAddModal(): void {
    this.editingBook = null;
    this.showModal = true;
  }

  protected openEditModal(id: string): void {
    const book: Book | undefined = this.books.find((b: Book): boolean => b.id === id);
    if (book) {
      this.editingBook = { ...book };
      this.showModal = true;
    }
  }

  protected handleModalClose(): void {
    this.showModal = false;
  }

  protected handleModalSubmit(book: Book): void {
    const existing: Book | undefined = this.books.find((b: Book): boolean => b.id === book.id);

    if (existing) {
      this.store.updateBook(book);
    } else {
      this.store.addBook(book);
    }

    this.showModal = false;
  }

  protected removeBook(id: string): void {
    this.store.removeBook(id);
  }
}
