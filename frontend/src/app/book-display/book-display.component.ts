import { Component, OnInit } from "@angular/core";
import { GoogleBookApiService } from "../services/google-book-api.service";
@Component({
  selector: "app-book-display",
  templateUrl: "./book-display.component.html",
  styleUrls: ["./book-display.component.css"],
})
export class BookDisplayComponent implements OnInit {
  books;
  constructor(private googleBookApiService: GoogleBookApiService) {}

  ngOnInit() {}
  OnSearch(s) {
    this.googleBookApiService.SearchBooks(s).subscribe((data) => {
      this.books = data.items;
    });
  }
}
