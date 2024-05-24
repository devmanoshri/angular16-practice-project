import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  baseUrl = 'https://freetestapi.com/api/v1';

  constructor(private http: HttpClient) {}

  getCountryList(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/countries`);
  }
}
