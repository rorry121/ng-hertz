import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const fadeMotion: AnimationTriggerMetadata = trigger('fadeMotion', [
  transition(':enter', [style({ opacity: 0 }), animate(`0.4s cubic-bezier(.2,1.2,.5,.9)`, style({ opacity: 1 }))]),
  transition(':leave', [style({ opacity: 1 }), animate(`0.4s cubic-bezier(.2,1.2,.5,.9)`, style({ opacity: 0 }))])
]);
