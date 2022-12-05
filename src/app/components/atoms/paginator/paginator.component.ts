import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

export const DEFAULT_PAGINATION = {
  pageSizeOptions: [5, 10, 25, 100],
  pageSize: 10,
};

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  @Input() currentPage: number = 1;
  @Input() pageSizeOptions: number[] = DEFAULT_PAGINATION.pageSizeOptions;
  @Input() pageSize: number = DEFAULT_PAGINATION.pageSize;
  @Input() totalRows: number = 0;
  @Input() disabled: boolean = false;

  @Output() onPageChanged: EventEmitter<any> = new EventEmitter();

  pageChanged(event: PageEvent) {
    this.onPageChanged.emit({
      pageSize: event.pageSize,
      currentPage: event.pageIndex + 1, // pageIndex is zero-based and currentPage is one-based
    });
  }
}
