import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() book: any = {};
  @Input() author: any = {};

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
