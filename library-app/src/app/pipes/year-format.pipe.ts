import { Pipe, PipeTransform } from '@angular/core';

// Форматируем отображение для поле год
@Pipe({ name: 'yearFormat', standalone: true })
export class YearFormatPipe implements PipeTransform {
  transform(value: number): string {
    return `Год: ${value}`;
  }
}
