import {
  ChangeDetectorRef,
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Book } from '../../../app/model/book.model';
import * as BooksActions from '../../../app/store/books/books.actions';
import { selectBooks } from '../../../app/store/books/books.selector';

@Component({
  selector: 'app-book-modal',
  imports: [FormsModule],
  templateUrl: './book-modal.component.html',
  styleUrl: './book-modal.component.scss',
})
export class BookModalComponent implements OnChanges {
  private store = inject(Store);
  cdr = inject(ChangeDetectorRef);

  @Input() bookToEdit?: Book | null;
  @Output() closeModal = new EventEmitter<void>();

  books = computed(() => this.store.selectSignal(selectBooks)());
  book: Book = { id: 0, title: '', author: '', cover: '', pages: 0, year: 0 };

  ngOnChanges(): void {
    if (this.bookToEdit) {
      this.book = this.bookToEdit
        ? { ...this.bookToEdit }
        : { id: 0, title: '', author: '', cover: '', pages: 0, year: 0 }; // добавление
      this.cdr.detectChanges();
    }
  }

  onSubmit(bookForm: NgForm) {
    if (bookForm.valid) {
      const formValue = bookForm.value;

      if (this.bookToEdit) {
        const updatedBook: Book = { ...formValue, id: this.bookToEdit.id };
        this.store.dispatch(BooksActions.updateBook({ book: updatedBook }));
      } else {
        const newBook: Book = {
          ...formValue,
          id: this.generateId(),
        };
        this.store.dispatch(BooksActions.addBook({ book: newBook }));
      }

      this.close();
    }
  }

  generateId(): number {
    if (this.books().length === 0) {
      return 0;
    }
    const lastId = Math.max(...this.books().map((book) => book.id));
    return lastId + 1;
  }

  close() {
    this.closeModal.emit();
  }
}
