import { Component, OnInit } from "@angular/core";
import { SignupService } from "../src/signup.service";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { ajax } from "rxjs/ajax";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  test: Date = new Date();
  focus;
  focus1;
  focus2;
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  //   onSubmit(item) {
  //     // this.data.getData("heyyyyyy from service")
  //     console.log(item.target.value);
  //   }
  seeVlaue(name, email, password, fullName) {
    var userDetail = {
      fullName: fullName.value,
      userName: name.value,
      email: email.value,
      password: password.value,
    };
    console.log(userDetail);

    return this.http
      .post("http://localhost:8080/api/users", userDetail)
      .subscribe((res) => console.log(res));

    // var usersignup = ajax("http://localhost:8080/api/users");
    // usersignup.subscribe((res) => console.log(res.status, res.response));
  }
}
