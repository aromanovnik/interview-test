import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAddBookComponent } from '../../app/ui/components/modals/modal-add-book/modal-add-book.component';
import { Book } from '../../app/models/book.model';
import { BookService } from '../../app/data/services/book/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ModalAddBookComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  bookService = inject(BookService);
  readonly books = this.bookService.books; // это signal<Book[]>

  selected: Book | null = null;
  modalOpen = false;

  openForm(book?: Book) {
    this.selected = book ?? null;
    this.modalOpen = true;
  }

  closeForm() {
    this.modalOpen = false;
    this.selected = null;
  }

  remove(id: number) {
    this.bookService.remove(id);
  }
}
