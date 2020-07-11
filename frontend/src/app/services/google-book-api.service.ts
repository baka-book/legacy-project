import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class GoogleBookApiService {
  constructor(private http: Http) {}

  SearchBooks(search) {
    const URI =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      search + 
      "&maxResults=12";
    return this.http.get(URI).map((response: Response) => response.json());
  }

  SearchByISBN(isbn) {
    var URI =
      "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
      isbn +
      "&maxResults=1";
    return this.http.get(URI).map((response: Response) => response.json());
  }
}
