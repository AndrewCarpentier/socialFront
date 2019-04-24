import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  logged = false;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.logged = this.service.verificationLogged();
    this.service.loggedSubject.subscribe((newLogged) => {
      console.log(newLogged);
      this.logged = newLogged;
    });
  }
}
