import {Component, Input, OnInit} from '@angular/core';
import {CommentInterface} from "../../interface/comment.interface";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment:CommentInterface
  constructor() { }

  ngOnInit(): void {
  }

}
