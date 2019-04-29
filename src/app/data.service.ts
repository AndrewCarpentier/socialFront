import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {

  loggedSubject = new Subject<boolean>();

  private host = 'http://localhost:50255/api/user';
  constructor(private http: HttpClient) { }

  register = (user) => {
    return this.http.post(this.host + '/register', user);
  }

  login = (user) => {
    return this.http.post(this.host + '/login', user);
  }

  getUser = (username) => {
    return this.http.get(this.host + '/getusername?username=' + username);
  }

  upload = (files) => {
    console.log(files);
    return this.http.post(this.host + '/upload', files);
  }

  loginStockage = (result) => {
    this.setLocalStorage('id', result.id);
    this.setLocalStorage('username', result.username);
    this.loggedSubject.next(true);
  }

  verificationLogged = () => {
    if (this.getLocalStorage('id') === null) {
      return false;
    } else {
      return true;
    }
  }

  logout = () => {
    this.removeLocalStorage('id');
    this.removeLocalStorage('username');
  }

  private setLocalStorage = (key, value) => {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getLocalStorage = (key) => {
    return localStorage.getItem(key);
  }

  private removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  }
}
