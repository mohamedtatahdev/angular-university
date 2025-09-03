import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {ClassroomsService} from '../../services/classrooms.service';
import {IuserForm} from '../../interfaces/Iuser';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatInputModule,} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatSelect, MatOption,MatFormFieldModule],
  template: `

    <form [formGroup]="userForm" class="w-[500px] bg-white p-4 " (submit)="submit()">
      <h2 class="mb-5 font-bold text-xl ">S'inscrire</h2>
      <mat-form-field>
        <mat-label>Nom</mat-label>
        <input matInput formControlName="name" type="text" id="name" >
        @if (isFieldValid('name')) {
          <mat-error class="error"> le champs est obligatoire </mat-error>

        }
      </mat-form-field>

      <mat-form-field>
        <mat-label>Prénom</mat-label>
        <input matInput formControlName="firstname" type="text" id="firstname" >
        @if (isFieldValid('firstname')) {
          <mat-error class="error"> le champs est obligatoire </mat-error>

        }
      </mat-form-field>
      <mat-form-field>
        <mat-label>Classe</mat-label>
        <mat-select formControlName="classroom" id="classrooms" required>
          @for (classroom of classrooms(); track classroom.id) {
            <mat-option [value]="classroom['@id']">
              {{ classroom.name }}
            </mat-option>
          }
        </mat-select>

        @if (userForm.get('classroom')!.hasError('required')) {
          <mat-error>Le champs est obligatoire</mat-error>
        }


        @if (userForm.get('classroom')!.hasError('capacityFull')) {
          <mat-error>Cette classe est déjà complète.</mat-error>
        }

      </mat-form-field>

      <mat-form-field>
        <mat-label>Email</mat-label>
        <input matInput formControlName="email" type="text" id="email" >
        @if (userForm.get('email')!.hasError('required')){
          <mat-error class="error"> le champs est obligatoire </mat-error>
        }

        @if (userForm.get('email')!.hasError('email')){
          <mat-error class="error"> le champs n'est pas un email </mat-error>

        }
      </mat-form-field>





      <div >
        <button mat-flat-button  [disabled]="userForm.invalid">Ajouter</button>
      </div>

    </form>
  `,
  styles: ` :host {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
  }

`,
})
export class SignupComponent implements OnInit{
  private classroomService = inject(ClassroomsService);
  readonly fb = inject(FormBuilder).nonNullable;
  readonly userService = inject(UserService);
  readonly router = inject(Router);


  userForm = this.fb.group({
    name: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    classroom: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  })

  classrooms = this.classroomService.classrooms;

  ngOnInit() {
    this.classroomService.getClassrooms().subscribe();
  }

  isFieldValid(name:string) {
    const formControl = this.userForm.get(name);
    return formControl?.invalid && (formControl?.dirty || formControl?.touched);
  }

  submit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const payload = { ...this.userForm.getRawValue(), registeredAt: new Date().toISOString() };

    this.userService.createStudent(payload).subscribe({
      next: () => {
        this.userService.getStudents().subscribe({
          next: () => this.router.navigateByUrl('/admin'),
          error: err => console.error('refresh students failed', err)
        });
      },
      error: (err) => {
        if (err.status === 422) {
          const ctrl = this.userForm.get('classroom');
          ctrl?.setErrors({ capacityFull: true, ...(ctrl.errors || {}) });
          ctrl?.markAsTouched();
        } else {
          console.error(err);
        }
      }
    });
  }






}
