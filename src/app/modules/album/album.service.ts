import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/models/album.model';
import { Photo } from 'src/app/models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) {}

  getAlbumList(userId: number): Observable<Album[]> {
    return this.httpClient.get<Album[]>(
      `${this.baseUrl}/albums?userId=${userId}`,
    );
  }
  getPhotoList(albumId: number): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(
      `${this.baseUrl}/photos?albumId=${albumId}`,
    );
  }
}
