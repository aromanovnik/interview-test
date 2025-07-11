import { Component } from '@angular/core';
import { HeaderComponent } from '@features/layout/header/header.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
