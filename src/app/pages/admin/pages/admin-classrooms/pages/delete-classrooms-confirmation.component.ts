import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-delete-classrooms-confirmation',
  imports: [
    MatDialogContent,
    MatButtonModule,
    MatDialogClose,
    MatDialogActions,
    MatDialogTitle
  ],
  template: `
    <h2 mat-dialog-title>Supprimer la formation</h2>
    <mat-dialog-content>
      <p>Voulez vous supprimez cette formation?</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">Non</button>
      <button mat-button [mat-dialog-close]="true">Oui</button>

    </mat-dialog-actions>
  `,
  styles: ``
})
export class DeleteClassroomsConfirmationComponent {

}
