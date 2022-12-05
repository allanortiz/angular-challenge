import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.css'],
})
export class BookDescriptionComponent {
  @Input() book: any = {};
  @Input() author: any = {};

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
