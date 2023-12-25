import { inject, Injectable } from '@angular/core';
import { data, User } from './data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: User[] = data;
  private httpClient = inject(HttpClient);
  constructor() {}

  // getUserData(): Promise<User[]> {
  //   return new Promise((resolve) => {
  //     resolve(this.userData);
  //   });
  // }

  getUserData(): Observable<User[]>  {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

}
