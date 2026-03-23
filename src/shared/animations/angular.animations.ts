import {animate, animation, style, transition, trigger, useAnimation} from '@angular/animations';

export const skillPopTrigger = trigger('skillPop', [
  transition(':enter', useAnimation(
    animation([
      style({
        transform: 'translate(0, 0) scale(0)',
        opacity: 0
      }),
      animate('{{ duration }} ease-out', style({
        transform: 'translate(var(--x), var(--y)) scale(1)',
        opacity: 1
      }))
    ]),
    {params: {duration: '0.5s'}}
  ))
]);
