import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, ViewChild  } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import * as THREE from 'three'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
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

//   scene = new THREE.Scene();
//   camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//   renderer = new THREE.WebGLRenderer({ antialias: true });
//   model: THREE.Object3D = new THREE.Object3D();
//   mixer: THREE.AnimationMixer | null = null;
//   animations: THREE.AnimationClip[] = [];
//   currentAnimationIndex = 0;
  
//  ngAfterViewInit() : void{
//   const controls = new OrbitControls(this.camera, this.renderer.domElement);
   
//   // controls.autoRotate = true;
//   controls.enableZoom=false;
//   controls.enablePan=false;

//   controls.enabled = false;
//   controls.update();
 
//   // const axesHelper = new THREE.AxesHelper(10); // Adjust the size as needed
//   //   this.scene.add(axesHelper);
 
  
//   const resizeRendererToDisplaySize = () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;

//     const aspectRatio = width / height;
//     this.camera.aspect = aspectRatio;
//     this.camera.updateProjectionMatrix();

//     this.renderer.setSize(width , height);
//   };
  
  
//   this.renderer.setClearColor(0xffffff);
  
//   this.camera.position.set(0, 0, 10);
  

// window.addEventListener('resize', resizeRendererToDisplaySize);
// resizeRendererToDisplaySize();

// const container = document.querySelector('.model-container');
// if (container) {
//   container.appendChild(this.renderer.domElement);
// }

//                     //---------------------------------------------load model--------------------------------
//                     const loader = new GLTFLoader();
//                     const dracoLoader = new DRACOLoader();
//                     dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
//                     loader.setDRACOLoader(dracoLoader);
//                     loader.load('assets/logo.glb', (gltf) => {
//                       this.model = gltf.scene;
//                       this.model.scale.set(2 ,2, 2);
//                       this.model.position.set(5 ,-0.134, -0.840);
//                       this.scene.add(this.model);
                      
//                       // Initialize the mixer for animations
//                       this.animations = gltf.animations;
//                       if (this.animations.length > 0) {
//                         this.mixer = new THREE.AnimationMixer(this.model);
//                         const aspectRatio = window.innerWidth / window.innerHeight;




//                         // Play the animations once
//                     for (let i = 0; i < this.animations.length; i++) {
//                               const action = this.mixer.clipAction(this.animations[i]);
//                                 action.setLoop(THREE.LoopOnce, 0); // Set the loop mode to play once and repetitions to 1
//                               action.clampWhenFinished = true; // Maintain the final state after the animation finishes
//                               action.play();
//                       }
                      

//                   }
//                   //rotate the object
//     const degrees = 156;
//     const radians = (degrees * Math.PI) / 180; 
//     this.model.rotateY(radians); 

//   });

  
//   const animate = () => {
//     requestAnimationFrame(animate);
//     if (this.mixer) { //----------------------------------------------------------------animation
//       this.mixer.update(0.01);
//       THREE.LoopOnce;
//     }
//    this.model.rotation.y += .005;
//     controls.update();
//     this.renderer.render(this.scene, this.camera);
    
//   };
//  //--------------------------lights---------------------------------------------------
//   const pointLight = new THREE.PointLight(0xffffff, 25, 500);
//   pointLight.position.set(5, 5, 0);
//   this.scene.add(pointLight);

// // const pointhelper = new THREE.PointLightHelper(pointLight, 1);
// // this.scene.add(pointhelper);

//   const pointLight1 = new THREE.PointLight(0xffffff, 25, 500);
//   pointLight1.position.set(0, 2, 8);
//   this.scene.add(pointLight1);

// // const pointhelper1 = new THREE.PointLightHelper(pointLight1, 1);
// // this.scene.add(pointhelper1);
  


//    animate();

// }

}