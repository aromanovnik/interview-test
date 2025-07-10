import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '@shared/lib/types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-modal',
  imports: [
    FormsModule
  ],
  templateUrl: './book-modal.component.html',
  standalone: true,
  styleUrl: './book-modal.component.scss'
})
export class BookModalComponent implements OnInit {
  @Input() book: Book | null = null;
  @Output() closed: EventEmitter<void> = new EventEmitter<void>();
  @Output() submitted: EventEmitter<Book> = new EventEmitter<Book>();

  form: Book = {
    id: '',
    author: '',
    title: '',
    year: new Date().getFullYear(),
    pages: 0,
  };

  ngOnInit(): void {
    if (this.book) {
      this.form = { ...this.book };
    } else {
      this.form.id = crypto.randomUUID();
    }
  }

  save(): void {
    this.submitted.emit(this.form);
  }

  cancel(): void {
    this.closed.emit();
  }
}
