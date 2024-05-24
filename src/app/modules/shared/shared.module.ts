import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    NotFoundComponent,
    PaginationComponent,
  ],
  imports: [CommonModule],
  exports: [CardComponent, HeaderComponent, PaginationComponent],
})
export class SharedModule {}
