import { Component } from '@angular/core';
import { LayoutComponent } from '@features/layout/layout.component';

@Component({
  selector: 'app-home',
  imports: [LayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
