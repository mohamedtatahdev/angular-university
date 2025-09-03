import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {ClassroomsService} from '../../services/classrooms.service';
import {IsigninForm} from '../../interfaces/Iuser';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="signinForm" class="form-card card" (submit)="submit()">
      <h2 class="mb-5 font-bold text-xl ">Connexion</h2>

      <div class="flex flex-col mb-5" >
        <label for="email">Email</label>
        <input formControlName="email" type="text" id="email" >
      </div>
      <div class="flex flex-col mb-5"  >
        <label for="password">Mot de passe</label>
        <input formControlName="password" type="text" id="password" >
      </div>
      <div >
        <button  class="bg-blue-400 p-2 rounded-2xl text-white">Connexion</button>
      </div>

    </form>
  `,
  styles: ` :host {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
  }
  .card {
    background-color: white;
    min-width: 500px;
    padding: 24px;
    border-radius: 24px;
  }
  .error {
    color: red;
    font-size: 0.875rem;
  }`,
})
export class SigninComponent {
  private classroomService = inject(ClassroomsService);
  readonly fb = inject(FormBuilder);
  readonly authService = inject(AuthService);
  readonly router = inject(Router);

  signinForm = this.fb.group({

    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })


  async submit() {
    if (this.signinForm.valid) {
      const raw = this.signinForm.getRawValue();
      const payload: IsigninForm = {
        username: raw.email ?? '',   // 👈 conversion
        password: raw.password ?? ''
      };

      try {
        const user = await this.authService.signin(payload);
        this.router.navigateByUrl('/');
      } catch (e) {
        console.error(e);
      }
    }
  }
}
