import { Component, Input, ViewChild } from '@angular/core';
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'cover',
    'title',
    'author',
    'first_publish_year',
  ];
  columnProps: ColumnProps = COLUMNS;
  currentPage = 0;
  pageSizeOptions: number[] = DEFAULT_PAGINATION.pageSizeOptions;
  pageSize = DEFAULT_PAGINATION.pageSize;
  totalRows = 0;

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    // this.loadData();
  }
}