import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

// Services
import {AuthService} from '../../share/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() titleurl: string;
  title: string;

  constructor(
    private router: Router,
    private rout: ActivatedRoute,
    private authservice: AuthService
  ) { }

  ngOnInit() {
    this.rout.paramMap.subscribe( (params: ParamMap) => {
      this.title = params['title'];
      console.log(params);
    });
  }
  logout() {
    this.authservice.logout();
    this.router.navigate(['/login'], { queryParams: { accessDenied: true }});
  }

}
