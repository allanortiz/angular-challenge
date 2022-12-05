import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { SearchInputComponent } from 'src/app/components/molecules/search-input/search-input.component';
import { SnackBarService } from 'src/app/services/snackbar.service';

const MIN_SEARCH_LENGTH = 4;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  inputValue: any = '';

  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor(private snackBService: SnackBarService) {}

  handleSearch() {
    if (!this.inputValue || this.inputValue?.length < MIN_SEARCH_LENGTH) {
      this.snackBService.openSnackBar(
        `Please enter at least ${MIN_SEARCH_LENGTH} characters`
      );

      return;
    }

    this.search.emit(this.inputValue);
  }

  updateInputValue(value: any) {
    this.inputValue = value;
  }
}
