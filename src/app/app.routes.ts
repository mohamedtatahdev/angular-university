import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {async} from 'rxjs';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'admin',
    loadChildren: async () =>
      (await import('./pages/admin/admin.routes')).routes,

  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
