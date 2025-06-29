import { Component, Inject } from "@angular/core";
import {
    FormControl,
    FormGroup,
    Validators
  } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Book } from "@entities/book";
import {MatDialogModule} from '@angular/material/dialog';

import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
    templateUrl: './book-form-modal.component.html',
    imports: [MatDialogModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule]
})
export class BookFormModalComponent {
    constructor(
            private dialogRef: MatDialogRef<BookFormModalComponent>,
            @Inject(MAT_DIALOG_DATA) public book?: Book
            ) {
            if (book) this.form.patchValue(book);
        }

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
  });
  

  save() {
    const data = this.form.value;
    this.dialogRef.close({ ...this.book, ...data });
  }
}
