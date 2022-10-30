import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "../interface/user.interface";
import {urls} from "../configs/urls";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {

  }

  getAllUsers(): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>(urls.users);
  }

}
