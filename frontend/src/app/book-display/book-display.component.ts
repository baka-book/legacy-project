import {
  Component,
  OnInit,
  ɵConsole,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { GoogleBookApiService } from "../services/google-book-api.service";
import { SharedSearchBookService } from "../services/shared-search-book.service";

@Component({
  selector: "app-book-display",
  templateUrl: "./book-display.component.html",
  styleUrls: ["./book-display.component.css"],
})
export class BookDisplayComponent implements AfterViewInit {
  books;
  info: any;
  ready: boolean;
  @ViewChild("book") book: ElementRef;
  constructor(
    private googleBookApiService: GoogleBookApiService,
    private sharedSearchBookService: SharedSearchBookService
  ) {}

  ngAfterViewInit() {
    this.sharedSearchBookService.bookData$.subscribe((message) => {
      // console.log(message);
      this.books = message;
      console.log(typeof this.books);
      // this.book.nativeElement.innerHTML = message;
    });
  }
}
