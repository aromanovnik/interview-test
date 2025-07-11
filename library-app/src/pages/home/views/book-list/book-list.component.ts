import { Component } from '@angular/core';
import { BookItem } from '@pages/home/components/book-item/types';
import { BookItemComponent } from '@pages/home/components/book-item/book-item.component';

@Component({
  selector: 'app-book-list',
  imports: [BookItemComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  public items: BookItem[] = [
    {
      id: 1,
      author: 'George R.R. Martin',
      title: 'A Game of Thrones',
      totalPages: 400,
      year: 1996,
    },
    {
      id: 2,
      author: 'Ayn Rand',
      title: 'Atlas Shrugged',
      totalPages: 1168,
      year: 1957,
    },
    {
      id: 3,
      author: 'John R.R. Tolkien',
      title: 'The Lord of the Rings',
      totalPages: 600,
      year: 1954,
    },
  ];
}
