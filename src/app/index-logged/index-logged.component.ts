import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-index-logged',
  templateUrl: './index-logged.component.html',
  styleUrls: ['./index-logged.component.scss']
})
export class IndexLoggedComponent implements OnInit {

  username;

  constructor(private service: DataService, private router: Router) {
    if (!service.verificationLogged()) {
      router.navigate(['/']);
    }
    this.username = this.service.getLocalStorage('username');
  }

  ngOnInit() {
  }

}
