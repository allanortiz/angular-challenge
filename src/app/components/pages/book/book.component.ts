import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { SnackBarService } from 'src/app/services/snackbar.service';
@Component({
  selector: 'app-book-page',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  bookKey: string = '';
  book: any = {};
  author: any = {};

  constructor(
    route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private snackBarService: SnackBarService
  ) {
    route.params.subscribe((params) => {
      this.bookKey = `works/${params['id']}`;
    });
  }

  ngOnInit() {
    this.getBook();
  }

  getAuthor(key: string) {
    this.bookService.getAuthor(key).subscribe((response: any) => {
      console.log(response);
    });
  }

  getBook() {
    this.bookService.getBook(this.bookKey).subscribe(
      (response: any) => {
        console.log(response);
        const coverId = response.covers?.[0];
        const coverExists = coverId && coverId > 0;
        const row =
          this.router.getCurrentNavigation()?.extras?.state?.['row'] || {};

        this.book = {
          title: response.title,
          cover:
            coverExists &&
            `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`,
          description: response.description?.value,
          subject_places: response.subjects.join(', '),
          subjects: response.subjects.join(', '),
          author: row.author,
          first_publish_year: row.first_publish_year,
        };

        this.getAuthor(response.authors?.[0]?.author?.key);
      },
      (error: any) => {
        console.error(error);

        this.snackBarService.openSnackBar(
          'Sorry, the book info could not be loaded, please try again in a few minutes'
        );
        this.router.navigate(['/']);
      }
    );
  }
}
