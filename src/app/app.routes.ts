import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SubPage1Component } from './pages/sub-page-1/sub-page-1.component';
import { SubPage2Component } from './pages/sub-page-2/sub-page-2.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { SubPage3Component } from './pages/sub-page-3/sub-page-3.component';
import { SubPage4Component } from './pages/sub-page-4/sub-page-4.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'galery', component: GaleryComponent },
  { path: 'sub-page-1', component: SubPage1Component },
  { path: 'sub-page-2', component: SubPage2Component },
  { path: 'sub-page-3', component: SubPage3Component },
  { path: 'sub-page-4', component: SubPage4Component },
  { path: '**', redirectTo: 'home' },
];
