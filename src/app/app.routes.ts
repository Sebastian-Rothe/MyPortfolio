import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { Sc2AboutMeComponent } from './main-content/sc2-about-me/sc2-about-me.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'about-me', component: Sc2AboutMeComponent},
    { path: 'imprint', component: ImprintComponent },
];
