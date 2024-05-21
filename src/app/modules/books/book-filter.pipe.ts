import { Pipe, PipeTransform } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(bookList: Book[], selectedGenre: string): Book[] {
    if (!selectedGenre) {
      return bookList;
    }
    return bookList.filter((book) => {
      return book.genre.includes(selectedGenre);
    });
  }
}
