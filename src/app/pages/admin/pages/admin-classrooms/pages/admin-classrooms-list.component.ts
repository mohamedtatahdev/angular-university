import {Component, inject, OnInit} from '@angular/core';
import {ClassroomsService} from '../../../../../services/classrooms.service';
import {RouterLink} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {DeleteClassroomsConfirmationComponent} from './delete-classrooms-confirmation.component';
import {ApiErrorService} from '../../../../../services/api-error.service';

@Component({
  selector: 'app-admin-classrooms-list',
  imports: [
    MatTableModule,
    MatButtonModule, MatDividerModule, MatIconModule,
    RouterLink,

  ],
  template: `
    <table mat-table [dataSource]="classrooms()" class="mat-elevation-z8 w-full ">

      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef> ID </th>
        <td mat-cell *matCellDef="let element"> {{element.id}} </td>
      </ng-container>

      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Nom </th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>

      <ng-container matColumnDef="actions" >
        <th mat-header-cell *matHeaderCellDef> Actions </th>
        <td mat-cell *matCellDef="let element" >
          <button
            mat-raised-button

            [routerLink]="['/admin/classrooms/new']"
            class="mr-4"
          >
            <mat-icon>add</mat-icon>
            Ajouter
          </button>

          <button class="mr-4" mat-raised-button  [routerLink]="['/admin/classrooms', element.id, 'edit']">
            <mat-icon class="mr-1">edit</mat-icon> Modifier
          </button>
          <button class="mr-4"
                  mat-flat-button color="warn" (click)="deleteClassroom(element.id)"


          >
            <mat-icon class="mr-1">delete</mat-icon> Supprimer
          </button>

        </td>
      </ng-container>


      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>

  `,
  styles: ` :host { padding: 24px }`
})
export class AdminClassroomsListComponent implements OnInit {
  private readonly dialog = inject(MatDialog);
  private apiErrorService = inject(ApiErrorService);
  private classroomsService = inject(ClassroomsService);

  classrooms = this.classroomsService.classrooms;
  displayedColumns: string[] = ['id', 'name', 'actions'];
  ngOnInit() {
    this.classroomsService.getClassrooms().subscribe({
      error: (err) => {
        this.apiErrorService.handleGetError(err);
      }
    });
  }

  deleteClassroom(classroomId: string) {
    const dialoguRef = this.dialog.open(DeleteClassroomsConfirmationComponent);
    dialoguRef.afterClosed().subscribe(result => {
      if (result) {
        this.classroomsService.deleteClassroom(classroomId).subscribe();
      }

    })
  }

}
