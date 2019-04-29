import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.scss']
})
export class AddFilesComponent implements OnInit {

  imgSrc;
  imgSrc2;
  imgSrc3;
  imgSrc4;
  imgSrc5;

  constructor() { }

  ngOnInit() {
  }

  change = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if(this.imgSrc5 == null && this.imgSrc4 != null)
      this.imgSrc5 = reader.result;
      if(this.imgSrc4 == null && this.imgSrc3 != null)
      this.imgSrc4 = reader.result;
      if(this.imgSrc3 == null && this.imgSrc2 != null)
      this.imgSrc3 = reader.result;
      if(this.imgSrc2 == null && this.imgSrc != null)
      this.imgSrc2 = reader.result;
      if(this.imgSrc == null)
      this.imgSrc = reader.result;
      
    }

    reader.readAsDataURL(file);
  }

  remove = (e) => {
    if(this.imgSrc == e){
      this.imgSrc = null;
    }
    if(this.imgSrc2 == e){
      this.imgSrc = null;
    }
    if(this.imgSrc3 == e){
      this.imgSrc = null;
    }
    if(this.imgSrc4 == e){
      this.imgSrc = null;
    }
    if(this.imgSrc5 == e){
      this.imgSrc = null;
    }
  }
}
