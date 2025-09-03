import { Component } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import {AdminClassroomsListComponent} from './pages/admin-classrooms/pages/admin-classrooms-list.component';
import {AdminStudentsComponent} from './pages/admin-students/admin-students.component';

@Component({
  selector: 'app-admin',
  imports: [
    MatTabsModule,
    AdminClassroomsListComponent,
    AdminStudentsComponent
  ],
  template: `
    <mat-tab-group>
      <mat-tab label="Formation"> <app-admin-classrooms-list /> </mat-tab>
      <mat-tab label="Etudients"> <app-admin-students />  </mat-tab>
    </mat-tab-group>

  `,
  styles: ` `
})
export class AdminComponent {

}
