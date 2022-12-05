import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const DEFAULT_NAME_SEARCH = 'Harry Potter';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(
    title: string = DEFAULT_NAME_SEARCH,
    currentPage: number,
    limit: number
  ): any {
    return this.http.get(
      `http://openlibrary.org/search.json?q=${title}&page=${currentPage}&limit=${limit}`
    );
  }
}
