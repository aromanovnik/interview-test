import { Directive, ElementRef, AfterViewInit } from '@angular/core';

// Создаем директиву для авто фокуса input. Расширяем поведение полей при пояление модальное окно
@Directive({ selector: '[appAutoFocus]', standalone: true })
export class AutoFocusDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
