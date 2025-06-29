import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  templateUrl: './confirm-modal.component.html',
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class ConfirmDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {}

  cancel(): void {
    this.dialogRef.close(false); // return false
  }

  confirm(): void {
    this.dialogRef.close(true); // return true
  }
}
