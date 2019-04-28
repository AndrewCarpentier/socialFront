import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  logged = false;
  user;

  constructor(private service: DataService, private route: ActivatedRoute) {
    route.params.subscribe((param) => {
      service.getUser(param.username).subscribe((newUser) => {
        console.log(newUser);
        this.user = newUser;
      });
    });
  }

  ngOnInit() {
  }

}
