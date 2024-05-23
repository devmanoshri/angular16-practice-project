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
  selectedGenreList = [] as string[];
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
        },
      }),
    );
  }

  filterBookListOnGenre(genre: string): void {
    if (!this.selectedGenreList.includes(genre)) {
      this.selectedGenreList = [...this.selectedGenreList, genre];
    } else {
      this.selectedGenreList = this.selectedGenreList.filter(
        (selectedGenre) => selectedGenre !== genre,
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
