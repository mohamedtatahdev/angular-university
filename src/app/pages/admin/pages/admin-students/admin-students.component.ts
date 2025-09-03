import { UserService } from './../../../../services/user.service';
import {Component, inject, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {ApiErrorService} from '../../../../services/api-error.service';

@Component({
  selector: 'app-admin-students',
  imports: [
    MatTableModule,
    MatButtonModule, MatDividerModule, MatIconModule,

  ],
  template: `
<!--    <table mat-table [dataSource]="classrooms()" class="mat-elevation-z8 w-full ">-->

<!--      <ng-container matColumnDef="id">-->
<!--        <th mat-header-cell *matHeaderCellDef> ID </th>-->
<!--        <td mat-cell *matCellDef="let element"> {{element.id}} </td>-->
<!--      </ng-container>-->

<!--      <ng-container matColumnDef="name">-->
<!--        <th mat-header-cell *matHeaderCellDef> Nom </th>-->
<!--        <td mat-cell *matCellDef="let element"> {{element.name}} </td>-->
<!--      </ng-container>-->

<!--      <ng-container matColumnDef="actions" >-->
<!--        <th mat-header-cell *matHeaderCellDef> Actions </th>-->
<!--        <td mat-cell *matCellDef="let element" >-->
<!--          <button-->
<!--            mat-raised-button-->

<!--            [routerLink]="['/admin/classrooms/new']"-->
<!--            class="mr-4"-->
<!--          >-->
<!--            <mat-icon>add</mat-icon>-->
<!--            Ajouter-->
<!--          </button>-->

<!--          <button class="mr-4" mat-raised-button  [routerLink]="['/admin/classrooms', element.id, 'edit']">-->
<!--            <mat-icon class="mr-1">edit</mat-icon> Modifier-->
<!--          </button>-->
<!--          <button class="mr-4"-->
<!--                  mat-flat-button color="warn" (click)="deleteClassroom(element.id)"-->


<!--          >-->
<!--            <mat-icon class="mr-1">delete</mat-icon> Supprimer-->
<!--          </button>-->

<!--        </td>-->
<!--      </ng-container>-->


<!--      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>-->
<!--      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>-->
<!--    </table>-->

<ul>
  @for (student of students(); track student.id) {
    <li>{{student.firstname}}</li>
  }
</ul>

  `,
  styles: ` :host { padding: 24px }`
})
export class AdminStudentsComponent implements OnInit {

  private userService = inject(UserService);
  private apiErrorService = inject(ApiErrorService);
  students = this.userService.students;
  displayedColumns: string[] = ['id', 'name', 'actions'];

  ngOnInit() {
    this.userService.getStudents().subscribe({
      error: (err) => {
        this.apiErrorService.handleGetError(err);
      }
    });
  }





}
