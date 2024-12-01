import {animate, state, style, transition, trigger} from '@angular/animations';

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

export const FADE_IN_LEFT_TOP = trigger('fadeInLeftTop', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(-100%) translateY(-50%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0) translateY(0)'
  })),
  transition('hidden <=> visible', [animate('750ms ease-out')])
]);

export const FADE_IN_RIGHT_TOP = trigger('fadeInRightTop', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(100%) translateY(-50%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0) translateY(0)'
  })),
  transition('hidden <=> visible', [animate('750ms ease-out')])
]);

export const FADE_IN_LEFT_BOTTOM = trigger('fadeInLeftBottom', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(-100%) translateY(50%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0) translateY(0)'
  })),
  transition('hidden <=> visible', [animate('750ms ease-out')])
]);

export const FADE_IN_RIGHT_BOTTOM = trigger('fadeInRightBottom', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(100%) translateY(50%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0) translateY(0)'
  })),
  transition('hidden <=> visible', [animate('750ms ease-out')])
]);
