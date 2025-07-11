import { Component, input, InputSignal } from '@angular/core';
import { BookItem } from '@pages/home/components/book-item/types';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-book-item',
  imports: [ButtonComponent],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
})
export class BookItemComponent {
  public data: InputSignal<BookItem> = input.required<BookItem>();
}
