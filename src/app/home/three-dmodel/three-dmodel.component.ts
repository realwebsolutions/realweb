import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { LoadingScreenComponent } from '../loading-screen/loading-screen.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-three-dmodel',
  standalone: true,
  imports: [LoadingScreenComponent,CommonModule],
  templateUrl: './three-dmodel.component.html',
  styleUrl: './three-dmodel.component.css'
})
export class ThreeDModelComponent implements AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  loader!: GLTFLoader;
  model!: THREE.Object3D;
  animations: THREE.AnimationClip[] = [];
  mixer: THREE.AnimationMixer | null = null;
  isModelLoading = true; // Set to true initially

  constructor() { }

  ngAfterViewInit(): void {
    this.init();
    
  }

  init() {
    // Create scene
    this.scene = new THREE.Scene();

    // Create camera
   
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 10;

    // Create renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
    this.renderer.setClearColor(0x000000);

    // Append renderer to DOM
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // Create GLTFLoader with DRACOLoader
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    this.loader = new GLTFLoader();
    this.loader.setDRACOLoader(dracoLoader);

    // Load GLB model
    this.loader.load(
      'assets/logo.glb',
      (gltf) => {
        this.model = gltf.scene;
        this.model.scale.set(2 ,2, 2);
        this.isModelLoading = false; // Set to true initially

        this.scene.add(this.model);
        this.animations = gltf.animations;
          this.mixer = new THREE.AnimationMixer(this.model);
          // const aspectRatio = window.innerWidth / window.innerHeight;

          // Play the animations once
      for (let i = 0; i < this.animations.length; i++) {
                const action = this.mixer.clipAction(this.animations[i]);
                  action.setLoop(THREE.LoopOnce, 0); // Set the loop mode to play once and repetitions to 1
                action.clampWhenFinished = true; // Maintain the final state after the animation finishes
                action.play();
        }
        

    
      },
      undefined,
      (error) => {
        console.error('Error loading GLB model:', error);
      }
    );

    // Start animation
    this.animate();
    if (typeof window !== 'undefined') {
      const controls = new OrbitControls(this.camera, this.renderer.domElement);
      controls.update();

      const resizeRendererToDisplaySize = () => {
          const width = window.innerWidth;
          const height = window.innerHeight;
      
          const aspectRatio = width / height;
          this.camera.aspect = aspectRatio;
          this.camera.updateProjectionMatrix();
      
          this.renderer.setSize((width -20), height);
      
      };        

      window.addEventListener('resize', resizeRendererToDisplaySize);
      resizeRendererToDisplaySize();
      
    }
    const pointLight = new THREE.PointLight(0xffffff, 25, 500);
    pointLight.position.set(5, 5, 0);
    this.scene.add(pointLight);

// const pointhelper = new THREE.PointLightHelper(pointLight, 1);
// this.scene.add(pointhelper);

    const pointLight1 = new THREE.PointLight(0xffffff, 25, 500);
    pointLight1.position.set(0, 2, 8);
    this.scene.add(pointLight1);

// const pointhelper1 = new THREE.PointLightHelper(pointLight1, 1);
// this.scene.add(pointhelper1);
    
  }
  

  animate() {
    requestAnimationFrame(() => this.animate());
    if (this.mixer) { //----------------------------------------------------------------animation
      this.mixer.update(0.01);
      THREE.LoopOnce;
    }
    this.renderer.render(this.scene, this.camera);
    
  }
}