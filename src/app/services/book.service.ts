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
    const formattedTitle = title.trim().replace(/\ /g, '+');

    return this.http.get(
      `http://openlibrary.org/search.json?q=${formattedTitle}&page=${currentPage}&limit=${limit}`
    );
  }
}
