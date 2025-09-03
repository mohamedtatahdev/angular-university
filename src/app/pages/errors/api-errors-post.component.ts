import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-api-errors-post',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDialogTitle
  ],
  template: `
    <h2 mat-dialog-title>Renvoyer la requete</h2>
    <mat-dialog-content>
      <p>Erreur du serveur Renvoyer le formulaire?</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]=false>Non</button>
      <button mat-button [mat-dialog-close]=true>Oui</button>

    </mat-dialog-actions>
  `,
  styles: ``
})
export class ApiErrorsPostComponent {

}
