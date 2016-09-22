import { Component, OnInit } from '@angular/core';
import {UsersService} from "./users.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  constructor(private usersService : UsersService) { }

  users$: Observable<any>;

  ngOnInit() {
    this.users$ = this.usersService.users();
    this.users$.subscribe(res => console.log(res));
    this.users$.subscribe(res => console.log(res));
  }

}
