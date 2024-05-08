import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { SpaceComponent } from './space/space.component';
import { VisionComponent } from './vision/vision.component';
import { FutureComponent } from './future/future.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    { path:'', redirectTo: 'home', pathMatch:"full"},
    { path: 'home', component: HomeComponent},  
    { path: 'knowledge', component: KnowledgeComponent}, 
     { path: 'space', component: SpaceComponent},  
    { path: 'vision', component: VisionComponent},  
    { path: 'future', component: FutureComponent},
    { path: 'footer', component: FooterComponent},

];
