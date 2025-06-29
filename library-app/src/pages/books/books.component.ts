import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BookListComponent } from '@entities/book';

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [BookListComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent {}
