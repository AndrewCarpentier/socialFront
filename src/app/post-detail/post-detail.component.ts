import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {


  @Input() post: any;
  @Input() user: any;
  @Output() closePost = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  close = () => {
    this.closePost.emit();
  }

}
