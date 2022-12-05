import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const DEFAULT_NAME_SEARCH = 'Harry Potter';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAuthor(key: string) {
    return this.http.get(`http://openlibrary.org${key}.json`);
  }

  getBook(key: string) {
    // const headers = new HttpHeaders()
    //   .set('content-type', 'application/json')
    //   .set('Accept', 'application/json');
    // .set('Access-Control-Allow-Origin', '*');

    return this.http.get(`http://openlibrary.org/${key}.json`);
    // return this.http.get(`http://openlibrary.org/book/${key.split('/')?.[1]}`, {
    //   headers,
    // });
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
