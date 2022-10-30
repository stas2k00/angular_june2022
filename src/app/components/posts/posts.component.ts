import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {PostInterface} from "../../interface/post.interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:PostInterface[]
  constructor(private postsServices:PostsService) { }

  ngOnInit(): void {
    this.postsServices.getAllPost().subscribe(posts=>this.posts=posts)
  }

}
