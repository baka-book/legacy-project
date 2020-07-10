import { Component, OnInit } from "@angular/core";
import { GoogleBookApiService } from "../services/google-book-api.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent {
  books;

  constructor(private googleBookApiService: GoogleBookApiService) {}

  OnSearch(s) {
    this.googleBookApiService.SearchBooks(s).subscribe((data) => {
      this.books = data.items;
    });
  }
  OnSearch1(s) {
    this.googleBookApiService.SearchBooks(s).subscribe((data) => {
      this.books = data.items;
      console.log(this.books);
    });
  }
  // ngOnInit() {
  //    this.googleBookApiService.SearchBooks('javascript')
  //         .subscribe((data)=>{
  //            //console.log(data.items)
  //         })
  // }
}
