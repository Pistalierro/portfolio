import {animate, style, transition, trigger} from '@angular/animations';

export const SLIDE_DOWN = trigger('slideDown', [
  transition(':enter', [
    style({transform: 'translateY(-100%)'}),
    animate('300ms ease-out', style({transform: 'translateY(0)'})),
  ]),
  transition(':leave', [
    style({transform: 'translateY(0%)'}),
    animate('300ms ease-out', style({transform: 'translateY(-100%)'})),
  ])
]);
