import { Component, Input } from '@angular/core';

@Component({
  selector: 'book-detail-template',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent {
  @Input() book: any = {};
  @Input() author: any = {};
  @Input() loading: boolean = false;
}
