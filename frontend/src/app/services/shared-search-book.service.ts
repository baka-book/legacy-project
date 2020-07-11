import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SharedSearchBookService {
  private _bookDataSource = new Subject<string>();

  bookData$ = this._bookDataSource.asObservable();
  constructor() {}

  sendMessage(message: string) {
    this._bookDataSource.next(message);
  }
}
