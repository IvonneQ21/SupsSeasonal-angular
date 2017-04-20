import { Component, OnInit, Inject, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {Http, Response} from '@angular/http';

// import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  myForm: FormGroup;
  loading: boolean;
  user: Object;

  constructor(private http: Http, @Inject(FormBuilder) fb: FormBuilder) {
    this.myForm = fb.group({
      email: '',
      password: ''
    });
  }
  ngOnInit() {

  }

  onSubmit(value: string): void {
    console.log('thisValue', value);
    const API_URL = 'https://supseasonal.herokuapp.com/api/login';
    this.http.post(API_URL, value)
    .subscribe((res: Response) => {
      this.user = res.json();
      console.log(this.user);
    });
  }
}




















// import { Component, OnInit } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup
// } from '@angular/forms';
// // import { authService } from 'a'
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
//
// export class LoginComponent implements OnInit {
//   myForm: FormGroup;
//
//   constructor(fb: FormBuilder){
//     this.myForm =fb.group({
//       ''
//     })
//   }
// }



  // message: string;

  // constructor(public authService: AuthService) {
  //   this.message = '';
  // }
  // login (username= string, password:string): boolean {
  //     this.message = '';
  //     if(!this.authService.login(username, password)) {
  //       this.message = 'Incorrect credentials.';
  //     }
  //     setTimeout(function() {
  //       this.message = '';
  //     }.bind(this), 2500);
  //   }
  //   return false;
  // }
  //
  // logout(): boolean {
  //   this.authService.logout();
  //   return false;
  // }
