import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GoogleBookApiService {

  constructor(private http: Http) { }

  /**
   * @function SearchBooks - searches for a list of books by query
   * @param search 
   * @returns {object}
   */

  SearchBooks(search) {
    const encodedURI  = "https://www.googleapis.com/books/v1/volumes?q="+ search +"&maxResults=9"
    return this.http.get(encodedURI)
        .map((response: Response) => response.json());
  }

/**
 * @function SearchByISBN searches for a specific book by ISBN code
 * @param isbn 
 * @returns {object}
 */

  SearchByISBN(isbn){
  var encodedURI = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn +"&maxResults=1";
  return this.http.get(encodedURI)
      .map((response: Response) => response.json());
}

  
}
