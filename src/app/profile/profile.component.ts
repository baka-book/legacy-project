import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { async } from "@angular/core/testing";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  animations: [
  
  ]
})
export class ProfileComponent {
  selectedFile: File;
  configUrl = "http://localhost:8080/uploade";
  image = "./assets/img/theme/no-profile-picture.jpg";
  div1=false;
  data ={
  fullname : "ahmed fenni",
  age : 99,
  town : "from",
  occupation : "work"
  }
  constructor(private http: HttpClient) {}

 /**@function onFileChanged
  * @param event 
  * @returns
  */
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  
/**
 * @function div1Function
 * @param {void}
 * @returns {void}
 */
  
  div1Function(){
    this.div1= !this.div1
    
}

/**
 * @function onSubmit
 * @param fullname 
 * @param age 
 * @param town 
 * @param occupation 
 * @returns {void}
 */

 onSubmit(fullname,age,town,occupation){
   this.data.fullname = fullname.value
   this.data.age = age.value
   this.data.town = town.value
   this.data.occupation = occupation.value
   

 }
  
/**
 * @function onUpload
 * @param {void}
 * @returns post request for the image upload
 */

  onUpload() {
    console.log(this.image);
    const uploadData = new FormData();

    uploadData.append("myFile", this.selectedFile, this.selectedFile.name);

    return this.http.post(this.configUrl, uploadData).subscribe((data: any) => {
      console.log(data);
      let x = "./assets/img/theme/" + "myFile-1594319779446.jpg"
      console.log(x)
      setTimeout(()=>{this.image = x },1500);
      
    });
  }
}
