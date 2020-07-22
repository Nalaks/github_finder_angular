import { Component, OnInit } from '@angular/core';
import { UserSearchService } from '../services/user-search.service';
import { CurrentUser, User } from '../interfaces/user-interfaces'


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  currentUser: User[] | null = null
  randomUser: User | null = null
  inputText: string
  loading: boolean = false

  constructor(private userSearchService: UserSearchService) { }

  searchUser(name: string) {
    this.loading = true
    setTimeout(() => {
      this.userSearchService.getUser(name).subscribe((result: CurrentUser) => this.currentUser = result.items.slice(0, 20))
    }, 500)    
    setTimeout(() => {
      this.loading = false
    }, 500)  
  }

  clearUsers() {
    this.currentUser = null
    this.inputText = ''
  }

  ngOnInit(): void {  
    this.generateRandomUser()
    this.userSearchService.currentState.subscribe((state: User[]) => this.currentUser = state)
  }

  saveData() {
    console.log(this.currentUser)
    this.userSearchService.changeState(this.currentUser)
  }

  generateRandomUser() {
    const id = Math.floor((Math.random() * 10000) + 1);
    this.userSearchService.getRandom(id).subscribe((result: User) => this.randomUser = result)
  }
}

