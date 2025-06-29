// book-confirm.directive.ts
import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@shared/ui/modal/ConfirmDialogComponent';

@Directive({
  selector: '[bookConfirm]',
  standalone: true,
})
export class BookConfirmDirective {
  @Input('bookConfirm') item!: string | number;
  @Input() confirmMessage?: string;
  @Output() confirmed = new EventEmitter<boolean>();

  constructor(private dialog: MatDialog) {}

  @HostListener('click')
  onClick() {
    const message = this.confirmMessage ?? 'Are you sure you want to delete this item?';
    this.dialog
      .open(ConfirmDialogComponent, {
        data: message,
        disableClose: true,
      })
      .afterClosed()
      .subscribe(result => {
        if (result) this.confirmed.emit(result);
      });
  }
}
