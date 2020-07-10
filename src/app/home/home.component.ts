import { Component, OnInit } from '@angular/core';

import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[navbar]',
})

@Component({

    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor() { }

    ngOnInit() {}
}
