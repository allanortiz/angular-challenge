import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/components/organisms/home/books/books.component';
import { DEFAULT_PAGINATION } from 'src/app/components/atoms/paginator/paginator.component';

@Component({
  selector: 'home-template',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() books: Book[] = [];
  @Input() loadingBooks: boolean = false;
  @Input() totalBooksFound: number = 0;

  @Output() onSearchBooks: EventEmitter<any> = new EventEmitter();

  lastSearchedBookTitle: string = '';
  lastCurrentPage: number = 1;
  lastPageSize: number = DEFAULT_PAGINATION.pageSize;

  constructor() {}

  booksPageChanged({ pageSize, currentPage }: any) {
    const searchData: any = {
      pageSize,
      currentPage,
    };

    this.lastCurrentPage = currentPage;
    this.lastPageSize = pageSize;

    if (this.lastSearchedBookTitle) {
      searchData.title = this.lastSearchedBookTitle;
    }

    this.onSearchBooks.emit(searchData);
  }

  searchBooks(
    bookTitle: string,
    pageSize: number = this.lastPageSize,
    currentPage: number = this.lastCurrentPage
  ) {
    this.lastSearchedBookTitle = bookTitle;

    console.log(bookTitle, pageSize, currentPage);

    console.log({ bookTitle, pageSize, currentPage });

    this.onSearchBooks.emit({ title: bookTitle, pageSize, currentPage });
  }
}
