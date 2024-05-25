import { countryAbbr } from './../countries.util';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit, OnDestroy {
  countryList = [] as Country[];
  subscription = new Subscription();
  numberOfPage!: number;
  pageSize = 50;
  pageArray = [] as number[];
  startIndex = 0;
  countryAbbr = countryAbbr;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.fetchCountryList();
  }

  fetchCountryList(): void {
    this.subscription.add(
      this.countryService.getCountryList().subscribe({
        next: (data) => {
          this.countryList = data;
          this.numberOfPage = Math.ceil(
            this.countryList.length / this.pageSize,
          );
          this.pageArray = new Array<number>(this.numberOfPage);
        },
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
