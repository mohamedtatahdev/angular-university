import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IclassroomForm, Iclassrooms} from '../interfaces/Iclassrooms';
import {map, Observable, tap} from 'rxjs';
import {ApiResponse} from '../interfaces/apiResponse';
import {AbstractControl, ValidationErrors, ValidatorFn, ɵFormGroupRawValue, ɵTypedOrUntyped} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ClassroomsService {

  private http = inject(HttpClient);
   classrooms = signal<Iclassrooms[]>([]);

  readonly url = 'https://hippo-api.ld-web.net/api/classrooms';


  getClassrooms(): Observable<Iclassrooms[]> {
    const token = localStorage.getItem('token');

    return this.http.get<ApiResponse<Iclassrooms>>(this.url).pipe(
      map(res => res.member),
      tap(classrooms => this.classrooms.set(classrooms))
    );
  }

  createClassroom(body: IclassroomForm): Observable<IclassroomForm>{
   const token = localStorage.getItem('token');
   const playload = {
     ...body,
     registerDeadline: new Date(body.registerDeadline).toISOString()
   };
   console.log(playload);
   return this.http.post<IclassroomForm>(this.url, playload, {
     headers: {
       Authorization: `Bearer ${token}`
     }
   });
 }




  deleteClassroom(classroomId: string) {
    const token = localStorage.getItem('token');
    console.log(token)
    return this.http.delete(`${this.url}/${classroomId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).pipe(
      tap(() => this.getClassrooms().subscribe())
    );
  }

}
