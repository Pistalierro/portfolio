import {animate, state, style, transition, trigger} from '@angular/animations';

export const FADE_IN = trigger('fadeInScale', [
  state('hidden', style({
    opacity: 0,
    transform: 'scale(0.75)',
  })),
  state('visible', style({
    opacity: 1,
    transform: 'scale(1)',
  })),
  transition('hidden <=> visible', [animate('500ms ease-out')])
]);

export const SLIDE_DOWN = trigger('slideDown', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)'
    }),
    animate('300ms ease-out', style({transform: 'translateY(0)'})),
  ]),
  transition(':leave', [
    style({transform: 'translateY(0%)'}),
    animate('300ms ease-out', style({
      transform: 'translateY(-100%)'
    })),
  ])
]);

export const FADE_IN_TOP = trigger('fadeInTop', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateY(-30%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  transition('hidden <=> visible', [animate('400ms ease-out')])
]);

export const FADE_IN_RIGHT_TOP = trigger('fadeInRightTop', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(30%) translateY(-30%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0) translateY(0)'
  })),
  transition('hidden <=> visible', [animate('400ms ease-out')])
]);

export const FADE_IN_RIGHT = trigger('fadeInRight', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(30%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0)'
  })),
  transition('hidden <=> visible', [animate('400ms ease-out')])
]);

export const FADE_IN_RIGHT_BOTTOM = trigger('fadeInRightBottom', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(30%) translateY(30%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0) translateY(0)'
  })),
  transition('hidden <=> visible', [animate('400ms ease-out')])
]);

export const FADE_IN_BOTTOM = trigger('fadeInBottom', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateY(30%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  transition('hidden <=> visible', [animate('400ms ease-out')])
]);

export const FADE_IN_LEFT_BOTTOM = trigger('fadeInLeftBottom', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(-30%) translateY(30%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0) translateY(0)'
  })),
  transition('hidden <=> visible', [animate('400ms ease-out')])
]);

export const FADE_IN_LEFT = trigger('fadeInLeft', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(-30%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0)'
  })),
  transition('hidden <=> visible', [animate('400ms ease-out')])
]);

export const FADE_IN_LEFT_TOP = trigger('fadeInLeftTop', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateX(-30%) translateY(-30%)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateX(0) translateY(0)'
  })),
  transition('hidden <=> visible', [animate('400ms ease-out')])
]);


