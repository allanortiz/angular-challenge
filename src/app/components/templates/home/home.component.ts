import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  Book,
  BooksComponent,
} from 'src/app/components/organisms/home/books/books.component';
import { DEFAULT_PAGINATION } from 'src/app/components/atoms/paginator/paginator.component';

@Component({
  selector: 'home-template',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() books: Book[] = [];
  @Input() loadingBooks: boolean = false;
  @Input() totalBooks: number = 0;
  @Input() booksNotFound: boolean = false;

  @Output() searchBooks: EventEmitter<any> = new EventEmitter();

  @ViewChild(BooksComponent) booksComponent!: BooksComponent;

  lastSearchedBookTitle: string = '';
  lastPageSize: number = DEFAULT_PAGINATION.pageSize;

  constructor() {}

  booksPageChanged({ pageSize, currentPage }: any) {
    const searchData: any = {
      pageSize,
      currentPage,
    };

    this.lastPageSize = pageSize;

    if (this.lastSearchedBookTitle) {
      searchData.title = this.lastSearchedBookTitle;
    }

    this.searchBooks.emit(searchData);
  }

  handleSearchBooks(
    bookTitle: string,
    pageSize: number = this.lastPageSize,
    currentPage: number = 1
  ) {
    this.lastSearchedBookTitle = bookTitle;

    this.booksComponent.currentPageToOne();
    this.searchBooks.emit({ title: bookTitle, pageSize, currentPage });
  }
}
