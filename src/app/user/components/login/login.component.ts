import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    account: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(false)
  });  

  constructor(private userService: UserService, protected router: Router) {
    if (userService.isAuthenticated()) {
      this.redirect()
    }
  }

  ngOnInit(): void {
  }

  login() {
    const data = {
      account: this.loginForm.value.account,
      password: this.loginForm.value.password
    }
    this.userService.authenticate(this.loginForm.value.rememberMe, data)
      .subscribe(user => {
        this.redirect();
      });
  }

  private redirect() {
    this.router.navigateByUrl('user/profile');

  }

}
