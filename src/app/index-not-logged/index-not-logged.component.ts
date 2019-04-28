import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-not-logged',
  templateUrl: './index-not-logged.component.html',
  styleUrls: ['./index-not-logged.component.scss']
})
export class IndexNotLoggedComponent implements OnInit {

  outletValue = true;
  constructor(private service: DataService, private router: Router) {
    const random = Math.floor(Math.random() * 100);
    console.log(random);
    if (random <= 50) {
      this.outletValue = false;
    } else {
      this.outletValue = true;
    }
    if (service.verificationLogged()) {
      router.navigate(['/connected']);
    }
  }

  ngOnInit() {
  }

  changeOutletValue = () => {
    this.outletValue = !this.outletValue;
  }

}
