import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Book } from '@entities/book/model/book.model'
import { BookCardComponent } from "./book-card.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import { selectBooks, selectLoading } from "@features/book/store/book.selectors";
import { Store } from "@ngrx/store";
import { addBook, loadBooks, updateBook } from "@features/book/store/book.actions";
import { BookFormModalComponent } from "@features/book/ui/BookFormComponent";
import { MatDialog } from '@angular/material/dialog';

import {MatIconModule} from '@angular/material/icon';
import { finalize, Observable } from "rxjs";
import { BookCrudFacade } from "@features/book/facade/book-crud.facade";
import { CommonModule } from "@angular/common";
import { ModalService } from "../../../services/modal/modal.service";

@Component({
    selector: 'app-book-list',
    imports: [
        BookCardComponent, MatToolbarModule, MatIconModule, CommonModule
    ],
    templateUrl: './book-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit {
    // @Input() books!: Book[];

    books$: Observable<Book[]>;
    loading$: Observable<boolean>;
    
    constructor(private store: Store, private modal: ModalService, private facade: BookCrudFacade) {4
        this.books$ = this.facade.books$;
        this.loading$ = this.facade.loading$;
    }

    ngOnInit() {
        this.facade.load();
    }

    isDialogOpen = false;

    openModal(book?: Book) {
        if (this.isDialogOpen) return;
        this.isDialogOpen = true;
      
        this.modal.openForm(book).pipe(
            finalize(() => this.isDialogOpen = false)
          ).subscribe(result => {
            if (!result) return;
            if (result.id) {
              this.store.dispatch(updateBook({ book: result }));
            } else {
              this.store.dispatch(addBook({ book: result }));
            }
          });
          
      }
      

    deleteBook(book: Book) {
        this.facade.delete(book.id);
      }
}


