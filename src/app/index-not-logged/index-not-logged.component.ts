import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-not-logged',
  templateUrl: './index-not-logged.component.html',
  styleUrls: ['./index-not-logged.component.scss']
})
export class IndexNotLoggedComponent implements OnInit {

  outletValue = true;
  constructor() {
    const random = Math.floor(Math.random() * 100);
    console.log(random);
    if (random <= 50) {
      this.outletValue = false;
    } else {
      this.outletValue = true;
    }
  }

  ngOnInit() {
  }

  changeOutletValue = () => {
    this.outletValue = !this.outletValue;
  }

}
