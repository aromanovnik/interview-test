import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bestseller',
})
export class BestsellerPipe implements PipeTransform {
  transform(value: string): string {
    return value === '1984' || value === 'Fight Club' ? value + ' ☆' : value;
  }
}
