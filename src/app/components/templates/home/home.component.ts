import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/components/organisms/home/books/books.component';

@Component({
  selector: 'home-template',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() books: Book[] = [];
  @Input() loadingBooks: boolean = false;

  @Output() onSearchBooks: EventEmitter<any> = new EventEmitter();

  constructor() {}

  searchBooks(name: string) {
    this.onSearchBooks.emit(name);
  }
}
