import {animate, state, style, transition, trigger} from '@angular/animations';

export const FADE_IN_SCALE = trigger('fadeInScale', [
  state('hidden', style({
    opacity: 0,
    transform: 'scaleY(0.75) scaleX(-1)',
    transformOrigin: 'top'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'scaleY(1) scaleX(1)',
    transformOrigin: 'top left',
  })),
  transition('hidden <=> visible', [animate('500ms ease-out')])
]);

export const BOUNCE_IN = trigger('bounceIn', [
  state('hidden', style({
    opacity: 0,
    transform: 'scale(0.5) translateY(50%) translateX(50%)',
    transformOrigin: 'bottom'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'scale(1) translateY(0) translateX(0)',
    transformOrigin: 'bottom'
  })),
  transition('hidden <=> visible', [
    animate('700ms cubic-bezier(0.68, -0.55, 0.27, 1.55)')
  ])
]);

export const POP_IN_SKEW = trigger('popInSkew', [
  state('hidden', style({
    opacity: 0,
    transform: 'scale(0.5) skewX(15deg)',
    transformOrigin: 'bottom'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'scale(1) skewX(0deg)',
    transformOrigin: 'bottom'
  })),
  transition('hidden <=> visible', [animate('500ms ease-in')])
]);

export const ZOOM_IN_ROTATE = trigger('zoomInRotate', [
  state('hidden', style({
    opacity: 0,
    transform: 'scale(0.5) rotate(-90deg)',
    transformOrigin: 'bottom right'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'scale(1) rotate(0deg)',
    transformOrigin: 'center'
  })),
  transition('hidden <=> visible', [animate('600ms ease-out')])
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

export const ANIMATION_TRIGGERS: string[] = ['fadeInLeftTop', 'fadeInTop', 'fadeInRightTop', 'fadeInRightBottom', 'fadeInBottom', 'fadeInLeftBottom'];


