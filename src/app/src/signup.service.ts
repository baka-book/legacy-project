import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SignupService {
  constructor() {}

  getData(data) {
    console.warn(data);
  }
}
