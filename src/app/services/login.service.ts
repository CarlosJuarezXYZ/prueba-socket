import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  createUser(user:any){
    this.http.post('http://127.0.0.1:55555/v1/socket/login', user);
  }
}
