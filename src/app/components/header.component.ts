import {Component, inject} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="flex-1">
      <a routerLink="/"> <strong>Hyppo University</strong> </a>
    </div>
    <ul class="flex gap-3">

      @if (isLoggedIn()) {
        <li>
          <a routerLink="/admin" routerLinkActive="text-blue-500">Admin</a>
        </li>
        <li>
          <a routerLink="/logout"  (click)="logout()">Deconnexion</a>
        </li>

      } @else {
        <li>
          <a routerLink="/signin" routerLinkActive="text-blue-500">Connexion</a>
        </li>
      }

      <!--


      -->
    </ul>
  `,
  styles: `
    :host {
      background-color: white;
      padding: 12px;
    }
  `,
})
export class HeaderComponent {
  readonly authService = inject(AuthService);


  isLoggedIn(): boolean{
    const t = this.authService.isAuthenticated();
    return t;
  }

  logout(){
    this.authService.logout();
  }


}
