import { Component, OnInit ,HostBinding } from '@angular/core';
import { Input } from '@angular/core'

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
 
})
export class DashComponent  {
  @Input() showMePartially: boolean;
  constructor() { 
   
  }
  
 

  
 
}
