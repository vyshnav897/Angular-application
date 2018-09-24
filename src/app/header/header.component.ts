import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private username;
  constructor(private router: Router) { }

  ngOnInit() {
    this.username = sessionStorage.getItem("user");
  }
  logOutClick() {
    sessionStorage.setItem("user",'');
    sessionStorage.setItem("loggedIn",'');
    this.router.navigate([''])
  }

}
