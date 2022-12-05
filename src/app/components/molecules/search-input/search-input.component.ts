import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent {
  @Input() placeholder: string = '';

  @Output() onSearch: EventEmitter<any> = new EventEmitter();
  @Output() onEnter: EventEmitter<any> = new EventEmitter();

  value: any = '';

  search() {
    this.onSearch.emit(this.value);
  }
}
