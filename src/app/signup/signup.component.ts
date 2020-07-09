import { Component, OnInit } from "@angular/core";
import { SignupService } from "../src/signup.service";
import { FormBuilder, Validators } from "@angular/forms";

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
  constructor(private data: SignupService) {}

  ngOnInit() {}

  //   onSubmit(item) {
  //     // this.data.getData("heyyyyyy from service")
  //     console.log(item.target.value);
  //   }
  seeVlaue(name,email,password) {
    var userDetail={
        name:name.value,
        email:email.value,
        password:password.value
    }
    console.log(userDetail)
  }
}
