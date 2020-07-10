import { RouterModule, Routes } from "@angular/router";
import { SearchComponent } from "./search/search.component";
import { BookDisplayComponent } from "./book-display/book-display.component";

const appRoutes: Routes = [
  { path: "search", component: SearchComponent },
  { path: "book", component: BookDisplayComponent },
];

export const AppRouting = RouterModule.forRoot(appRoutes);
