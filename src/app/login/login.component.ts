import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { FormGroup } from 'ng2-semantic-ui';

// import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  selector: 'login',
  // moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    // model: any = {};
    // loading = false;
    // returnUrl: string;
    //
    constructor(){}
    //     private route: ActivatedRoute,
    //     private router: Router,
    //     private authenticationService: AuthenticationService,
    //     private alertService: AlertService) { }
    //
    ngOnInit() {
    //     // reset login status
    //     this.authenticationService.logout();
    //
    //     // get return url from route parameters or default to '/'
    //     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    //
    // login() {
    //     this.loading = true;
    //     this.authenticationService.login(this.model.username, this.model.password)
    //         .subscribe(
    //             data => {
    //                 this.router.navigate([this.returnUrl]);
    //             },
    //             error => {
    //                 this.alertService.error(error);
    //                 this.loading = false;
    //             });
    // }
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
