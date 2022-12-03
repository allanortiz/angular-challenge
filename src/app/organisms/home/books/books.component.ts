import { Component, Input } from '@angular/core';

export type Book = {
  title: string;
  author: string;
  first_publish_year: string;
};

const COLUMN_NAMES = {
  title: 'Title',
  author: 'Author',
  first_publish_year: 'First Publish Year',
};

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  @Input() books: Book[] = [
    { title: 'Merlina Book', author: 'Allan', first_publish_year: '2022' },
  ];

  columns: string[] = ['title', 'author', 'first_publish_year'];
  columnNames = COLUMN_NAMES;
}
