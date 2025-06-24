import { Component } from '@angular/core';
import { ModalAddBookComponent } from '../../modals/modal-add-book/modal-add-book.component';
import { ModalService } from '../../../../data/services/modal.service';

@Component({
  selector: 'app-top-bar',
  imports: [ModalAddBookComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.show();
  }
}
