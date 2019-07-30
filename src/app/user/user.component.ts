import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // public users = [];
  public users$: Observable<any>;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data: [any]) => {
    //   console.log(data)
    //   this.users = data;
    // })

    this.users$ = this.http.get('https://jsonplaceholder.typicode.com/users')

  }

  displayUserDetails(userId) {
    // this.router.navigateByUrl('/users/',)
  }

}