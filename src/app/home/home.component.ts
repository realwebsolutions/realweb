import { CommonModule } from '@angular/common';
import { Component  } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ThreeDModelComponent } from './three-dmodel/three-dmodel.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ThreeDModelComponent, LoadingScreenComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  
  animations: [
    trigger('fadeInWithDisplacementleft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(10px)' }),
        animate('1s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeInWithDisplacementright', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-10px)' }),
        animate('1s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HomeComponent  {
  isModelLoading = true; // Set to true initially


}