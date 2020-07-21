import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const USERS_MODEL = 'https://api.github.com/users'
const USER_MODEL = 'https://api.github.com/search/users?q='

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${USERS_MODEL}`)
  }

  getUser(name) {
    return this.http.get(`${USER_MODEL}${name}`)
  }
}
