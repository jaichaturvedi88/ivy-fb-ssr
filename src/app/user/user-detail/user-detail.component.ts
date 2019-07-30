import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, switchMap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId: number;
  user: any;
  user$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.user$ = this.route.paramMap.pipe(
      tap(params => this.userId = +params.get('userId')),
      switchMap(params => {
        return this.http.get(`https://jsonplaceholder.typicode.com/users/${+params.get('userId')}`)
      })
    )



    this.route.paramMap.pipe(
      tap(params => this.userId = +params.get('userId')),
      switchMap(params => {
        return this.http.get(`https://jsonplaceholder.typicode.com/users/${+params.get('userId')}`)
      })
    )
      .subscribe(user => {
        this.user = user;
        // console.log("userid", user);
      });
  }

}
