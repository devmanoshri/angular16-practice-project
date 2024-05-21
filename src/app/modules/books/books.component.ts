import { BooksService } from './books.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  bookList = [] as Book[];
  subscription = new Subscription();
  genreList = [] as string[];
  selectedGenre = '';
  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.fetchBookList();
  }

  fetchBookList(): void {
    this.subscription.add(
      this.bookService.getBookList().subscribe({
        next: (data: Book[]) => {
          this.bookList = data;
          let genreList = [] as string[];
          this.bookList.forEach((book) => {
            genreList = [...book.genre, ...genreList];
          });
          this.genreList = Array.from(new Set(genreList));
          console.log(this.genreList);
        },
      }),
    );
  }

  ngOnDestroy(): void {}
}
