import { Component, OnInit } from '@angular/core';
import {CommentInterface} from "../../interface/comment.interface";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: CommentInterface[];
  constructor(private commentsServices:CommentsService) { }

  ngOnInit(): void {
    this.commentsServices.getAllComments().subscribe(comments => this.comments = comments);
  }

}
