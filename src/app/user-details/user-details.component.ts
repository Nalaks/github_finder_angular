import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserSearchService } from '../services/user-search.service';
import { Repo, User } from '../interfaces/user-interfaces';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null;
  repos: Repo[] | null = null;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private userSearchService: UserSearchService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getRepoList();
  }

  getUser(): void {
    this.loading = true;
    const name = this.route.snapshot.paramMap.get('name');
    setTimeout(() => {
      this.userSearchService
        .getUserDetails(name)
        .subscribe((user: User) => (this.user = user));
    }, 500);
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  getRepoList(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.userSearchService
      .getRepos(name)
      .subscribe((repos: Repo[]) => (this.repos = repos.slice(0, 5)));
  }

  goBack(): void {
    this.location.back();
  }
}
