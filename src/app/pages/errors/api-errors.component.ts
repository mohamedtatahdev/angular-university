import {Component, inject} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ApiErrorService} from '../../services/api-error.service';
import {MatButton} from '@angular/material/button';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';

@Component({
  selector: 'app-api-errors',
  imports: [MatProgressSpinnerModule, MatButton, MatDialogActions, MatDialogContent, MatDialogTitle, MatDialogClose],
  template: `
    @if (apiError.isRetrying()) {
      <div class="flex items-center justify-center h-full">
        <mat-spinner></mat-spinner>
      </div>
    }


  `,
  styles: ``
})
export class ApiErrorsComponent {
  apiError = inject(ApiErrorService);

}
