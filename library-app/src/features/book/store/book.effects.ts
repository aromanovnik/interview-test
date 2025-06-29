import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { addBook, loadBooks, loadBooksSuccess, updateBook, deleteBook } from "./book.actions";
import { BookApi } from "../api/book.api";

@Injectable()
export class BookEffects {
    load$;
    add$;
    update$;
    delete$;
  constructor(private actions$: Actions, private api: BookApi) {

    this.load$ = createEffect(() =>
        this.actions$.pipe(
          ofType(loadBooks),
          switchMap(() =>
            this.api.fetchAll().pipe(map(books => loadBooksSuccess({ books })))
          )
        )
      );
    
      this.add$ = createEffect(() =>
        this.actions$.pipe(
          ofType(addBook),
          switchMap(({ book }) =>
            this.api.create(book).pipe(map(() => loadBooks()))
          )
        )
      );
    
      this.update$ = createEffect(() =>
        this.actions$.pipe(
          ofType(updateBook),
          switchMap(({ book }) =>
            this.api.update(book).pipe(map(() => loadBooks()))
          )
        )
      );
    
      this.delete$ = createEffect(() =>
        this.actions$.pipe(
          ofType(deleteBook),
          switchMap(({ id }) =>
            this.api.delete(id).pipe(map(() => loadBooks()))
          )
        )
      );

  }

 
}
