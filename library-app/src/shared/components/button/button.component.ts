import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { buttonTheme } from '@shared/components/button/types/button-theme.type';
import { buttonType } from '@shared/lib/types';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    '[class]': 'className()',
  },
})
export class ButtonComponent {
  public type: InputSignal<buttonType> = input<buttonType>('button');
  public theme: InputSignal<buttonTheme> = input<buttonTheme>('base');

  public className: Signal<string> = computed(() => {
    const array = [`theme-${this.theme()}`];

    return array.join(' ');
  });
}
