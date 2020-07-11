import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { AppRouting } from "./app.routing";
import { GoogleBookApiService } from "./services/google-book-api.service";
import { BookDisplayComponent } from "./book-display/book-display.component";
import { SharedSearchBookService } from "./services/shared-search-book.service";

@NgModule({
  declarations: [AppComponent, SearchComponent, BookDisplayComponent],
  imports: [BrowserModule, FormsModule, HttpModule, AppRouting],
  providers: [GoogleBookApiService, SharedSearchBookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
