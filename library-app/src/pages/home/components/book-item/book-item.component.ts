import { Component, inject, input, InputSignal } from '@angular/core';
import { BookItem } from '@pages/home/components/book-item/types';
import { ButtonComponent } from '@shared/components/button/button.component';
import { BookListService } from '@pages/home/views/book-list/book-list.service';

@Component({
  selector: 'app-book-item',
  imports: [ButtonComponent],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
  private _bookListService: BookListService = inject(BookListService);

  public data: InputSignal<BookItem> = input.required<BookItem>();

  public onEdit() {
    this._bookListService.openBookFormDialog(this.data());
  }
}
