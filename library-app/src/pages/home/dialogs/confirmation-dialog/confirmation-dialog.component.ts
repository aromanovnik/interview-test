import { Component, computed, inject, output, Signal } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ConfirmationDialogOptions } from '@pages/home/dialogs/confirmation-dialog/types/confirmation-dialog-options.interface';
import { DEFAULT_OPTIONS } from '@pages/home/dialogs/confirmation-dialog/confirmation-dialog.constants';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { confirmationDialogResult } from '@pages/home/dialogs/confirmation-dialog/types/confirmation-dialog-result.type';

@Component({
  selector: 'app-confirmation-dialog',
  imports: [ButtonComponent],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent {
  public data: Partial<ConfirmationDialogOptions> = inject(DIALOG_DATA);

  public result = output<confirmationDialogResult>();

  public options: Signal<ConfirmationDialogOptions> = computed<ConfirmationDialogOptions>(() => {
    return {
      ...DEFAULT_OPTIONS,
      ...this.data,
    };
  });

  public onConfirm() {
    this.result.emit('confirm');
  }

  public onCancel() {
    this.result.emit('cancel');
  }
}
