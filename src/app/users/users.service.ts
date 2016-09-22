import { Injectable } from '@angular/core';
import {Jsonp, Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishLast';

@Injectable()
export class UsersService {


  private API_URL = "https://api.github.com/users";

  constructor(private http: Http) { }

  users() : Observable<any>{
    return this.http.get(this.API_URL).map(res => res.json()).publishLast().refCount();
  }

}
