import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostInterface} from "../interface/post.interface";
import {urls} from "../configs/urls";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }
  getAllPost():Observable<PostInterface[]> {
    return this.httpClient.get<PostInterface[]>(urls.posts);
  }
}
