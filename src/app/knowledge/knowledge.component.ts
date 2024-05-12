import { Component } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.css',
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
export class KnowledgeComponent {

}
