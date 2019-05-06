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
  subscribed = false;

  constructor(private service: DataService, private route: ActivatedRoute, private router: Router) {
    route.params.subscribe((param) => {
      service.getUser(param.username).subscribe((newUser: any) => {
        if (newUser.id === 0) {
          router.navigate(['/']);
        }
        this.user = newUser;
        console.log(this.user);
        if (service.verificationLogged()) {
          service.verifSubscribed({idSubscriber: this.service.getLocalStorage('id'), idSubscription: this.user.id}).subscribe((newSubscribed: boolean) => {
            this.subscribed = newSubscribed;
          });

          if (service.getLocalStorage('id') == newUser.id) {
            this.logged = true;
          }
        }

      });
    });

  }

  ngOnInit() {
  }
  subscribe = () => {
    if (this.service.verificationLogged()) {
      this.subscribed = true;
      this.service.subscribe({idSubscriber: this.service.getLocalStorage('id'), idSubscription: this.user.id}).subscribe((result) => {
      });
    }
  }

  unsubscribe = () => {
    this.subscribed = false;
    this.service.unsubscribe({idSubscriber: this.service.getLocalStorage('id'), idSubscription: this.user.id}).subscribe((result) => {
    });
  }

  AddProfilImage = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    this.service.uploadProfilImg({file: formData, id: this.service.getLocalStorage('id')}).subscribe((result) => {

    });
  }

}
