import { Component } from '@angular/core';
import { LayoutComponent } from '@features/layout/layout.component';
import { BookListComponent } from '@pages/home/views/book-list/book-list.component';

@Component({
  selector: 'app-home',
  imports: [LayoutComponent, BookListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
