import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent {
  @Input() placeholder: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter();
  @Output() enter: EventEmitter<string> = new EventEmitter();

  value: any = '';

  handleSearch() {
    this.search.emit(this.value.trim());
  }
}
