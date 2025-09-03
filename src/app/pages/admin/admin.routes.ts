import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminClassroomsFormComponent } from './pages/admin-classrooms/pages/admin-classrooms-form.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'classrooms/new',
    component: AdminClassroomsFormComponent,
  },
  {
    path: 'classrooms/:classroomId/edit',
    component: AdminClassroomsFormComponent,
  },
];
