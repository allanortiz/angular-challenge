import {
  Component,
  Input,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { ColumnProps } from 'src/app/components/atoms/table/table.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { DEFAULT_PAGINATION } from 'src/app/components/atoms/paginator/paginator.component';

export type Book = {
  key: string;
  cover: string;
  title: string;
  author: string;
  first_publish_year: string;
  language: string;
};

const COLUMNS: ColumnProps = {
  cover: { type: 'image_url', name: 'Cover' },
  title: { type: 'string', name: 'Title' },
  author: { type: 'string', name: 'Author' },
  first_publish_year: { type: 'string', name: 'First Publish Year' },
};

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  @Input() books: Book[] = [];
  @Input() loading = false;
  @Input() totalBooks = 0;
  @Input() booksNotFound = false;

  @Output() pageChanged: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'cover',
    'title',
    'author',
    'first_publish_year',
  ];
  columnProps: ColumnProps = COLUMNS;
  currentPage = 1;
  pageSizeOptions: number[] = DEFAULT_PAGINATION.pageSizeOptions;
  pageSize = DEFAULT_PAGINATION.pageSize;
  totalRows = 0;

  constructor(private router: Router) {}

  handlePageChanged(event: any) {
    this.pageSize = event.pageSize;
    this.currentPage = event.currentPage;

    this.pageChanged.emit({
      pageSize: this.pageSize,
      currentPage: this.currentPage,
    });
  }

  currentPageToOne() {
    this.currentPage = 1;
  }

  handleRowClick(row: any) {
    this.router.navigateByUrl(`${row.key}`, { state: { row } });
  }
}
