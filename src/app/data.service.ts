import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  private host = 'http://localhost:50255/api/user';
  constructor(private http: HttpClient) { }

  register = (user) => {
    console.log(user);
    return this.http.post(this.host + '/register', user, { headers: { 'Content-type': 'application/json' } });
  }

}
