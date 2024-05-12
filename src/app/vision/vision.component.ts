import { Component } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [],
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],
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
export class VisionComponent { }
