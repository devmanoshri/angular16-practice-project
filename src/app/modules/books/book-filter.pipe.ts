import { Pipe, PipeTransform } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(bookList: Book[], selectedGenreList: string[]): Book[] {
    if (!selectedGenreList.length) {
      return bookList;
    }
    return bookList.filter((book) => {
      return this.isGenreExist(book.genre, selectedGenreList);
    });
  }

  isGenreExist(genreList: string[], selectedGenreList: string[]): boolean {
    let isMatchFound = false;
    selectedGenreList.forEach((selectedGenre) => {
      if (genreList.includes(selectedGenre)) {
        isMatchFound = true;
      }
    });
    return isMatchFound;
  }
}
