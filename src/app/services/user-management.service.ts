import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Comments } from '../models/comments.model';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) {}

  getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}/users`);
  }

  getSelectedPostsCommentList(postId: number): Observable<Comments[]> {
    return this.httpClient.get<Comments[]>(
      `${this.baseUrl}/comments?postId=${postId}`,
    );
  }



  getUserDetails(useId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/users/${useId}`);
  }
  getSelectedUsersPost(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      `${this.baseUrl}/posts?userId=${userId}`,
    );
  }
  getSelectedUsersAlbum(userId:number): Observable<Album[]>{
    return this.httpClient.get<Album[]>(`${this.baseUrl}/albums?userId=${userId}`)
  }

}

