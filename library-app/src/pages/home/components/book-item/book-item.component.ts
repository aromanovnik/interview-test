import { Component, input, InputSignal } from '@angular/core';
import { BookItem } from '@pages/home/components/book-item/types';

@Component({
  selector: 'app-book-item',
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
  public data: InputSignal<BookItem> = input.required<BookItem>();
}
