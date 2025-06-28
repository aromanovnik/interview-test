import {
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
  effect,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '@entities/book.model';

@Component({
  selector: 'app-book-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss'],
})
export class BookModalComponent implements OnChanges {
  @Input() book: Book | null = null;
  @Output() save = new EventEmitter<Book>();
  @Output() cancel = new EventEmitter<void>();

  form = signal<Book>({
    id: crypto.randomUUID(),
    author: '',
    title: '',
    year: new Date().getFullYear(),
    pages: 100,
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['book']) {
      const b = this.book;
      if (b) {
        this.form.set({ ...b });
      } else {
        this.form.set({
          id: crypto.randomUUID(),
          author: '',
          title: '',
          year: new Date().getFullYear(),
          pages: 100,
        });
      }
    }
  }

  submitForm() {
    this.save.emit(this.form());
  }
}
