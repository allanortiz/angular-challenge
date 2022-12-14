import { Component } from '@angular/core';
import { DEFAULT_PAGINATION } from 'src/app/components/atoms/paginator/paginator.component';
import { Book } from 'src/app/components/organisms/home/books/books.component';
import { BookService } from 'src/app/services/book.service';
import { SnackBarService } from 'src/app/services/snackbar.service';

const DEFAULT_SEARCH = 'Technology';
@Component({
  selector: 'index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  books: Book[] = [];
  loadingBooks = false;
  currentBooksPage = 1;
  totalBooks = 0;
  booksNotFound = false;
  state: any;

  constructor(
    private bookService: BookService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit() {
    this.state = this.bookService.bookListState$.getValue() || null;

    if (!this.state) {
      this.searchBooks(
        {
          title: undefined,
          currentPage: 1,
          pageSize: DEFAULT_PAGINATION.pageSize,
        },
        true
      );

      return;
    }

    this.currentBooksPage = this.state.currentPage;
    this.totalBooks = this.state.totalBooks;
    this.books = this.state.books;
  }

  getPageSize(pageSize: number | null) {
    if (pageSize === null && this.state?.pageSize) {
      return this.state?.pageSize;
    }

    if (pageSize !== null) {
      return pageSize;
    }

    return DEFAULT_PAGINATION.pageSize;
  }

  searchBooks(
    { title = DEFAULT_SEARCH, currentPage, pageSize }: any,
    isInit: boolean = false
  ) {
    this.loadingBooks = true;

    const currentPageSize = this.getPageSize(pageSize);

    this.bookService.getBooks(title, currentPage, currentPageSize).subscribe(
      (response: any) => {
        this.books = response.docs.map((book: any) => {
          return {
            key: book.key,
            title: book.title,
            author: book.author_name?.join(', '),
            language: book.language?.join(', '),
            first_publish_year: book.first_publish_year,
            cover:
              book.cover_i &&
              `https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`,
          };
        });

        this.state = {
          currentPage,
          pageSize: currentPageSize,
          books: this.books,
          totalBooks: response.numFound,
        };

        if (!isInit) {
          this.state.title = title;
        }

        this.bookService.bookListState$.next(this.state);

        this.totalBooks = response.numFound;
        this.booksNotFound = response.numFound === 0;
        this.loadingBooks = false;
      },
      (error: any) => {
        console.error(error);

        this.loadingBooks = false;

        this.snackBarService.openSnackBar(
          'Sorry, the book list could not be loaded, please try again in a few minutes'
        );
      }
    );
  }
}
