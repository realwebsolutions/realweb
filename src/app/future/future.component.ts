import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import {  RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-future',
  standalone: true,
  imports: [NgOptimizedImage, RouterLinkActive],
  templateUrl: './future.component.html',
  styleUrl: './future.component.css',
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
export class FutureComponent {

}
