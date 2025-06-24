import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../../../../data/services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-add-book',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './modal-add-book.component.html',
  styleUrl: './modal-add-book.component.scss',
})
export class ModalAddBookComponent {
  form = new FormGroup({
    book_author: new FormControl(null),
    book_name: new FormControl(null),
    book_year: new FormControl(null),
    book_pages: new FormControl(null),
  });
  onSubmit(event: Event) {
    console.log(event);
  }

  isVisible = false;

  constructor(private modalService: ModalService) {
    this.modalService.isVisible$.subscribe((show) => (this.isVisible = show));
  }

  closeModal() {
    this.modalService.hide();
  }
}
