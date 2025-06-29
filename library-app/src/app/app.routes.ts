import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'books',
    loadComponent: () =>
      import('@pages/books/books.component').then(m => m.BooksComponent),
  }
];
