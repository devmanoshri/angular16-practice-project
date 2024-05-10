import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getSingleUser(): Observable<User> {
    return this.httpClient.get<User>(
      'https://jsonplaceholder.typicode.com/users/3',
    );
  }
}
