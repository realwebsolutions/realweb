import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[
{    provide: Window , useValue : Window
}  ]
})
export class HomeComponent {
 
 constructor(private window : Window){
  
 }
}