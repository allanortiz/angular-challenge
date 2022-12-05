import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

  @Output() search: EventEmitter<string> = new EventEmitter();
  @Output() enter: EventEmitter<string> = new EventEmitter();

  @Input() value: any = '';
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  handleSearch() {
    if (this.disabled) return;

    this.search.emit();
  }
}
