import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Comments } from '../models/comments.model';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) {}

  getComments(): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>(`${this.baseUrl}/comments`).pipe(
      map((response) => {
        return response.slice(0, 5);
      }),
    );
  }

  postComments(data: Partial<Comments>): Observable<Comments> {
    return this.httpClient.post<Comments>(`${this.baseUrl}/comments`, data);
  }
}
