import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
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
    // should move this into services and use an injectable for this.
    const API_URL = 'http://supseasonal.herokuapp.com/api/login';
    this.http.post(API_URL, value)
    .subscribe((res: Response) => {
      this.user = res.json();
    });
  }
}
