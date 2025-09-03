import {ChangeDetectionStrategy, Component, effect, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

import { Router} from '@angular/router';
import {ClassroomsService} from '../../../../../services/classrooms.service';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ApiErrorsComponent} from '../../../../errors/api-errors.component';
import {ApiErrorService} from '../../../../../services/api-error.service';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-admin-classrooms-form',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],

  template: `
    <form [formGroup]="classroomForm" class="w-[500px] bg-white p-4 " (submit)="submit()">
      <h2 class="mb-5 font-bold text-xl ">Ajouter une formation</h2>
      <mat-form-field>
        <mat-label >Nom de la formation</mat-label>
        <input matInput formControlName="name" type="text" id="name" >
        @if (isFieldValid('name')) {
            <mat-error class="error"> le champs est obligatoire </mat-error>

            }
      </mat-form-field>
      <mat-form-field class="flex flex-col mb-5" >
        <mat-label for="capacity">Capacité</mat-label>
        <input matInput formControlName="capacity" type="number" id="capacity" >
        @if (isFieldValid('capacity')) {
          @if (classroomForm.get('capacity')!.hasError('required')) {
            <div class="error">le champs est obligatoire</div>
          }
          @if (classroomForm.get('capacity')!.hasError('min')) {
            <div class="error">La classe doit être constitué d'au moin une personne</div>
          }
          @if (classroomForm.get('capacity')!.hasError('max')) {
            <div class="error">La classe doit être constitué de 200 personnes au maximum </div>
          }
        }
      </mat-form-field>

      <mat-form-field >
        <mat-label for="registerDeadline">Date limite d'inscription</mat-label>
        <input matInput [matDatepicker]="picker" formControlName="registerDeadline"  id="registerDeadline" >
        <mat-hint>MM/DD/YYYY</mat-hint>
        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
        @if (isFieldValid('registerDeadline')) {
          <div class="error"> La date est obligatoire </div>

        }
      </mat-form-field>


      <div >
        <button mat-button  [disabled]="classroomForm.invalid" class="bg-blue-400 p-2 rounded-2xl text-white">Ajouter</button>
      </div>

    </form>
  `,
  styles: `:host{

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;

  }
  `
})
export class AdminClassroomsFormComponent {
  private classroomService = inject(ClassroomsService);
  private fb = inject(FormBuilder).nonNullable;
  private router = inject(Router);
  private apiError = inject(ApiErrorService)

  classroomForm = this.fb.group({
    name: ['', [Validators.required]],
    capacity: [0, [Validators.required, Validators.min(1), Validators.max(200)]],
    registerDeadline: ['', [Validators.required]],

  })

  submit(){

    if(this.classroomForm.valid){
      this.classroomService.createClassroom(this.classroomForm.getRawValue()).subscribe({
        next: () => this.router.navigateByUrl('/admin'),

        error: (err) => this.apiError.handlePostError(err, () => this.submit())
      });
    }
  }

  isFieldValid(name:string) {
    const formControl = this.classroomForm.get(name);
    return formControl?.invalid && (formControl?.dirty || formControl?.touched);
  }
}
