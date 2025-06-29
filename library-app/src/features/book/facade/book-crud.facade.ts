import { Injectable } from "@angular/core";
import { Book } from "@entities/book";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectBooks, selectLoading } from "../store/book.selectors";
import { addBook, deleteBook, loadBooks, updateBook } from "../store/book.actions";

@Injectable({ providedIn: 'root' })
export class BookCrudFacade {
    books$: Observable<Book[]>;
    loading$: Observable<boolean>;
  
    constructor(private store: Store) {
      this.books$ = this.store.select(selectBooks); 
      this.loading$ = this.store.select(selectLoading);  
    }

  load() {
    this.store.dispatch(loadBooks());
  }

  create(book: Book) {
    this.store.dispatch(addBook({ book }));
  }

  update(book: Book) {
    this.store.dispatch(updateBook({ book }));
  }

  delete(id: number) {
    this.store.dispatch(deleteBook({ id }));
  }
}
