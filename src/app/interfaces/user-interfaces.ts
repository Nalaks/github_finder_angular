export interface Repo {
  name: string
  description: string
  stargazers_count: number
  watchers_count: number
  forks_count: number
  html_url: string
}

export interface User {
  name: string
  location: string
  bio: string
  blog: string
  company: string
  html_url: string
  login: string
  avatar_url: string
  followers: number
  following: number
  public_repos: number
  public_gists: number
}

export interface CurrentUser {
  items: User[]
}