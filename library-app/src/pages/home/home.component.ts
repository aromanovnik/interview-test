import { Component } from '@angular/core';
import { BookComponent } from '@pages/book/book.component';

@Component({
  selector: 'app-home',
  imports: [BookComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title: string = 'List of books';
}
