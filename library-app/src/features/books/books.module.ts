import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/books.reducer';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    StoreModule.forFeature('booksFeature', booksReducer),
  ],
})
export class BooksModule {}
