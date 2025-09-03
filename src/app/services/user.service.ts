import {inject, Injectable, signal} from '@angular/core';
import {Istudents, IuserForm} from '../interfaces/Iuser';
import {HttpClient} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {ApiResponse} from '../interfaces/apiResponse';

const API_USERS = "https://hippo-api.ld-web.net/api/students"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  students = signal<Istudents[]>([]);

  // user.service.ts
  createStudent(body: IuserForm): Observable<IuserForm> {
    return this.http.post<Istudents>(API_USERS, body).pipe(
      tap(created => this.students.update(list => [...list, created])) // 👈
    );
  }


  getStudents(): Observable<Istudents[]> {
    const token = localStorage.getItem('token');

    return this.http.get<ApiResponse<Istudents>>(API_USERS, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).pipe(
      map(res => res.member),
      tap(students => this.students.set(students))
    );
  }
}
