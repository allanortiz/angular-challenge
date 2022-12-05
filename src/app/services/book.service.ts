import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const DEFAULT_NAME_SEARCH = 'Harry Potter';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  bookListState$ = new BehaviorSubject<any>(null);

  getAuthor(key: string) {
    return this.http.get(`http://openlibrary.org${key}.json`);
  }

  getBook(key: string) {
    return this.http.get(`http://openlibrary.org/${key}.json`);
  }

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
