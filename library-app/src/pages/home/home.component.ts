import { Component } from '@angular/core';
import { ModalAddBookComponent } from '../../app/ui/components/modals/modal-add-book/modal-add-book.component';
import { TopBarComponent } from '../../app/ui/components/partials/top-bar/top-bar.component';

@Component({
  selector: 'app-home',
  imports: [ModalAddBookComponent, TopBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
