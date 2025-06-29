import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from '@entities/book/model/book.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BookConfirmDirective } from '@shared/directives/book-confirm.directive';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, BookConfirmDirective],
  templateUrl: './book-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent {
  @Input() book!: Book;
  @Output() delete = new EventEmitter<void>();

  onDeleteConfirmed() {
    this.delete.emit(); 
  }
  getConfirmMessage(): string {
    return `Delete book "${this.book.title}" by ${this.book.author}?`;
  }

  cardClicked(event: MouseEvent) {
    event.stopPropagation();
  }
}
