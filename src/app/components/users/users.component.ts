import { Component, OnInit } from '@angular/core';

import {UserInterface} from "../../interface/user.interface";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // http:HttpClient;
  // constructor(http:HttpClient) {
  //   this.http = http;
  // }
  users:UserInterface[];

  constructor(private userService:UsersService) {

  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users=>this.users=users)
  }

  // getAllUsers():void{
  //   this.httpClient.get<UserInterface[]>(urls.users).subscribe(users => this.users = users);
  // }
}
