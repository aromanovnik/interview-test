import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnInit,
  OnChanges,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Book } from '../../../../models/book.model';
import { BookService } from '../../../../data/services/book/book.service';

@Component({
  selector: 'app-modal-add-book',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './modal-add-book.component.html',
  styleUrl: './modal-add-book.component.scss',
})
export class ModalAddBookComponent implements OnInit, OnChanges {
  @Input() book: Book | null = null;
  @Input() modalOpen = false;
  @Output() close_modal = new EventEmitter<void>();

  form = {
    book_author: '',
    book_name: '',
    book_year: 2024,
    book_pages: 100,
  };

  constructor(private bookService: BookService) {}

  ngOnInit() {
    if (this.book) Object.assign(this.form, this.book);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['book']) {
      const book = changes['book'].currentValue;
      if (book) {
        this.form = {
          book_author: book.book_author,
          book_name: book.book_name,
          book_year: book.book_year,
          book_pages: book.book_pages,
        };
      } else {
        this.form = {
          book_author: '',
          book_name: '',
          book_year: new Date().getFullYear(),
          book_pages: 100,
        };
      }
    }
  }

  save() {
    if (this.book) {
      this.bookService.update({ ...this.form, id: this.book.id });
    } else {
      this.bookService.add(this.form);
    }
    this.close_modal.emit();
  }
}
