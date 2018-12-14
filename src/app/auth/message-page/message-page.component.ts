import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss']
})
export class MessagePageComponent implements OnInit {

  message: string;
  description: string;
  link: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      // If the user has passed the registration successfully send him to the login page,
      // Otherwise, return it to the registration page,
      // And showing in the relevant message about it.
      params.registered === 'true' ? this.message = 'You have successfully registered' :
        this.message = 'Something went wrong please try again';
      params.registered === 'true' ? this.link = 'login' : this.link = 'registration';

      // If an error occurs shows this message and returning it back.
      if ( params.url === 'false' ) {
        this.message = 'No connection to server';
        this.description = 'For the application to work correctly, start the JSON server, more details in the file README.md.';
        this.link = 'registration';
      }
      window.setTimeout(() => {
        this.router.navigate([this.link]);
      }, 15000);
    }, error => console.log(error));
  }
}
