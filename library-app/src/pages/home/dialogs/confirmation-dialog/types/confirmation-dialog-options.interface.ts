import { buttonTheme } from '@shared/components/button/types/button-theme.type';

export interface ConfirmationDialogOptions {
  title: string;
  confirmButtonText: string;
  confirmButtonTheme: buttonTheme;
  cancelButtonText: string;
  cancelButtonTheme: buttonTheme;
}
