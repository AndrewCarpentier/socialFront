import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.scss']
})
export class AddFilesComponent implements OnInit {

  imgSrc = [];
  description;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
  }

  change = (e) => {
    for (let f of e.target.files) {
      const file = f;
      const reader = new FileReader();
      reader.onload = () => {
        if (this.imgSrc.length < 5) {
          this.imgSrc.push({url: reader.result, f: file});
        }
      };
      reader.readAsDataURL(file);
    }
  }

  changeDescription = (e) => {
    this.description = e.target.value;
  }

  remove = (e) => {
    for (let i = 0 ; i < this.imgSrc.length ; i++) {
      if (this.imgSrc[i] === e) {
        this.imgSrc.splice(i, 1);
        break;
      }
    }
  }

  upload = () => {
    let formData = new FormData();

    for (let img of this.imgSrc) {
      formData.append('files', img.f);
    }
    this.service.upload({files: formData, description: this.description}).subscribe((result) => {
      this.router.navigate(['/']);
    });

  }
}
