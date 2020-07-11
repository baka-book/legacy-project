import { Component, OnInit } from '@angular/core';
import { GoogleBookApiService } from '../google-book-api.service';
 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  books; 

  constructor(private googleBookApiService: GoogleBookApiService) { }

/**
 * @function OnSearch - searches for a specific book 
 * @param s 
 * @returns data books
 */


  OnSearch(s){
    this.googleBookApiService.SearchBooks(s)
        .subscribe((data) => {
            this.books = data.items;
        });
  }

  /**
   * @function OnSearchBook
   * @param s 
   * @returns data of the clicked book
   */
  
  OnSearchBook(s){
    this.googleBookApiService.SearchBooks(s)
        .subscribe((data) => {
            this.books = data.items;
        });
  }

  ngOnInit() {
     this.googleBookApiService.SearchBooks('javascript')
          .subscribe((data)=>{
             //console.log(data.items)
          })
  }

}
