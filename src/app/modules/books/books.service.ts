import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  baseUrl = 'https://freetestapi.com/api/v1';
  constructor(private http: HttpClient) {}

  getBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }
}
