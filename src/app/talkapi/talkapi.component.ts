import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-talkapi',
  templateUrl: './talkapi.component.html',
  styleUrls: ['./talkapi.component.css']
})
export class TalkapiComponent implements OnInit {
  data: Object;
  loading: boolean;
  constructor(public http: Http) { }

  ngOnInit() {
  }
  makeRequest(): void {
    this.loading = true;
    this.http.request('https://supseasonal.herokuapp.com/api/foods')
    .subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;
    });
  }
}
