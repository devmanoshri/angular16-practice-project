import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountriesComponent } from './countries/countries.component';
import { CountryRoutingModule } from './country-routing.module';
import { CountryPipe } from './country.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CountriesComponent, CountryPipe],
  imports: [CommonModule, CountryRoutingModule, SharedModule],
})
export class CountryModule {}
