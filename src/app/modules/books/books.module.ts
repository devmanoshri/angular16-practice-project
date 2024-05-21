import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookFilterPipe } from './book-filter.pipe';

@NgModule({
  declarations: [BooksComponent, BookFilterPipe],
  imports: [CommonModule, BooksRoutingModule],
})
export class BooksModule {}
