import { Component, OnInit } from '@angular/core';
import { UserSearchService } from '../services/user-search.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  currentUser = null
  test = ''

  constructor(private userSearchService: UserSearchService) { }

  displayUsers() {
    this.userSearchService.getUsers().subscribe((result) =>  this.currentUser = result.slice(0, 20))
  }

  searchUser(name) {
    this.userSearchService.getUser(name).subscribe((result) => this.currentUser = result.items.slice(0, 20))
  }

  clearUsers() {
    this.currentUser = null
    this.test = ''
  }

  ngOnInit(): void {
    // this.displayUsers()
  }

}
