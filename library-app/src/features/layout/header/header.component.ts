import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { BookListService } from '@pages/home/views/book-list/book-list.service';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private _bookListService: BookListService = inject(BookListService);

  public openAddBookDialog() {
    this._bookListService.openAddBookDialog();
  }
}
