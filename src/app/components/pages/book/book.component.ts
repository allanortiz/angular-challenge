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
  loading: boolean = false;

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
      this.author = {
        key: response.key,
        name: response.name,
        top_work: response.top_work,
        birth_date: response.birth_date,
        death_date: response.death_date,
        bio: response.bio?.value || response.bio,
        website: response.website,
        wikipedia: response.wikipedia,
      };
    });
  }

  getBook() {
    this.loading = true;

    this.bookService.getBook(this.bookKey).subscribe(
      (response: any) => {
        const coverId = response.covers?.[0];
        const coverExists = coverId && coverId > 0;

        this.book = {
          title: response.title,
          cover:
            coverExists &&
            `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`,
          description: response.description?.value ?? response.description,
          subject_places: response.subjects?.join(', '),
          subject_times: response.subject_times?.join(', '),
          subjects: response.subjects?.join(', '),
        };

        this.getAuthor(response.authors?.[0]?.author?.key);

        this.loading = false;
      },
      (error: any) => {
        console.error(error);

        this.loading = false;

        this.snackBarService.openSnackBar(
          'Sorry, the book info could not be loaded, please try again in a few minutes'
        );
        this.router.navigate(['/']);
      }
    );
  }
}
