import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBestseller]',
  standalone: true,
})
export class BestsellerDirective {
  @Input('appBestseller') @HostBinding('class.bestseller') bestseller: boolean = false;

  constructor() {}
}
