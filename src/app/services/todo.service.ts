import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos',
    );
  }
  getTodoDetails(): Observable<Todo> {
    return this.httpClient.get<Todo>(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
  }
}
