import { Component } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-space',
  standalone: true,
  imports: [],
  templateUrl: './space.component.html',
  styleUrl: './space.component.css',
   animations: [
    trigger('fadeInWithDisplacementleft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(10px)' }), // Initial state: hidden, slightly displaced
        animate('1s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' })) // Animate fade in and remove displacement
      ])
    ]),
    trigger('fadeInWithDisplacementright', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-10px)' }), // Initial state: hidden, slightly displaced
        animate('1s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' })) // Animate fade in and remove displacement
      ])
    ])
  ],
})
export class SpaceComponent {

}
