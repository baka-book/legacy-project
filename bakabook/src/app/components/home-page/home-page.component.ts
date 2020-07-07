// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home-page',
//   templateUrl: './home-page.component.html',
//   styleUrls: ['./home-page.component.css']
// })
// export class HomePageComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {

  user = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  })

  consoleValues() {
    console.log(this.user.value)
  }
}
