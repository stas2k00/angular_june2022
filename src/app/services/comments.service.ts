import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentInterface} from "../interface/comment.interface";
import {urls} from "../configs/urls";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient:HttpClient) { }
  getAllComments():Observable<CommentInterface[]> {
    return this.httpClient.get<CommentInterface[]>(urls.comments);
  }
}
