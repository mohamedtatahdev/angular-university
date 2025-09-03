import {Component, inject} from '@angular/core';

import {HeaderComponent} from './components/header.component';
import {FooterComponent} from './components/footer.component';
import {RouterOutlet} from '@angular/router';
import {ApiErrorsComponent} from './pages/errors/api-errors.component';
import {ApiErrorService} from './services/api-error.service';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  template: `
    @if (apiError.isRetrying()) {
      <app-api-errors />
    } @else {
      <app-header class="flex items-center shadow-2xl" />
      <div class="flex-1 flex flex-col">
        <router-outlet />
      </div>
      <app-footer class="flex items-center justify-center" />
    }

  `,

  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    ApiErrorsComponent
  ],
  styles: `:host { min-height: 100vh; display: flex; flex-direction: column; }`,

})
export class AppComponent {

  apiError = inject(ApiErrorService);





}
