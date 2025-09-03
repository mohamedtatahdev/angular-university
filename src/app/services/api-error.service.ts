import {Injectable, signal} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ApiErrorsComponent} from '../pages/errors/api-errors.component';
import {ApiErrorsPostComponent} from '../pages/errors/api-errors-post.component';

@Injectable({
  providedIn: 'root'
})
export class ApiErrorService {
  constructor(private dialog: MatDialog) {}


  isRetrying = signal(false); // 👈 utilisé par le composant

  private retryIntervalId: any;

  handleGetError(err: any) {
    if (err.status !== 503) return;

    this.isRetrying.set(true);

    this.retryIntervalId = setInterval(() => {
      window.location.reload();
    }, 2000);
  }

  handlePostError(err: any, cb: () => void) {
    if (err.status !== 503) return;

    const ref = this.dialog.open(ApiErrorsPostComponent);
    ref.afterClosed().subscribe(confirm => {
      if (confirm) cb();
    });
  }
}
