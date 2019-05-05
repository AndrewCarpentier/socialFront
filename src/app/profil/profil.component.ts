import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  logged = false;
  user;

  constructor(private service: DataService, private route: ActivatedRoute, private router: Router) {

    route.params.subscribe((param) => {
      service.getUser(param.username).subscribe((newUser: any) => {
        if (newUser.id === 0) {
          router.navigate(['/']);
        }
        this.user = newUser;

        console.log(newUser.id);
        if (service.verificationLogged()) {
          if (service.getLocalStorage('id') == newUser.id) {
            this.logged = true;
          }

          
        }

      });
    });

  }

  ngOnInit() {
  }

}
