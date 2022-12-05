import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  // let name: string;
  name: string = '';

  @Input() icon: string = '';
  @Input() placeholder: string = '';

  @Output() onClickIcon: EventEmitter<any> = new EventEmitter();
  @Output() onEnter: EventEmitter<any> = new EventEmitter();

  // constructor(private bookService: BookService) {}

  iconClick() {
    // this.bookService.getBooks(this.name).subscribe((response: any) => {
    //   console.log(response);
    // });

    console.log(this.name, this.onClickIcon);
    this.onClickIcon.emit(this.name);
  }

  enter() {
    this.onEnter.emit(this.name);
  }
}
