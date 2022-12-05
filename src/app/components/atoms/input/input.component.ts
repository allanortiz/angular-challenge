import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() placeholder: string = '';

  @Output() enter: EventEmitter<any> = new EventEmitter();

  @Input() value: any;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
}
