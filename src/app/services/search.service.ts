import { Subscription, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {}

  getSearchedResult(searchValue: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      `${this.baseUrl}/posts?title_like=${searchValue}`,
    );

    // return this.httpClient.get<Post[]>(
    //   "https://jsonplaceholder.typicode.com/posts?title_like=sunt"
    // );
  }
}
