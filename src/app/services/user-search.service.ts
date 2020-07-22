import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user-interfaces'


const USER_DETAIL_MODEL = 'https://api.github.com/users/'
const USER_MODEL = 'https://api.github.com/search/users?q='
const RANDOM_MODEL = 'https://api.github.com/user/'
const REPO_MODEL = '/repos?per_page=5&sort=created:asc'

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  private stateSource = new BehaviorSubject(null);
  currentState= this.stateSource.asObservable();

  constructor(private http: HttpClient) { }

  getUserDetails(name: string) {
    return this.http.get(`${USER_DETAIL_MODEL}${name}`)
  }

  getUser(name: string) {
    return this.http.get(`${USER_MODEL}${name}`)
  }

  getRandom(id: number) {
    return this.http.get(`${RANDOM_MODEL}${id}`)
  }

  getRepos(name: string) {
    return this.http.get(`${USER_DETAIL_MODEL}${name}${REPO_MODEL}`)
  }

  changeState(state: User[]) {
    this.stateSource.next(state)
  }
}

