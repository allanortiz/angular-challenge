import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

  @Output() enter: EventEmitter<any> = new EventEmitter();

  @Input() ngModel: any;
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
}
