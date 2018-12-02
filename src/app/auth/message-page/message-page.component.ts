import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss']
})
export class MessagePageComponent implements OnInit {

  message: string;
  link: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      params.registered === 'true' ? this.message = 'You have successfully registered' :
        this.message = 'Something went wrong please try again';
      params.registered === 'true' ? this.link = 'login' : this.link = 'registration';
      window.setTimeout(() => {
        this.router.navigate([this.link]);
      }, 15000);
    });
  }

}
