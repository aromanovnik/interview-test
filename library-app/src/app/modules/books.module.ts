import { NgModule } from '@angular/core';
import { HomeComponent } from '@pages/home';
import { ModalAddBookComponent } from '../ui/components/modals/modal-add-book/modal-add-book.component';
import { YearFormatPipe } from '../pipes/year-format.pipe';
import { AutoFocusDirective } from '../directives/auto-focus.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeComponent,
    ModalAddBookComponent,
    YearFormatPipe,
    AutoFocusDirective,
  ],
})
export class BooksModule {}
