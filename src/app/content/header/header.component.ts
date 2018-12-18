import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';

// Services
import {AuthService} from '../../share/services/auth.service';
import {ArticleService} from '../share/services/article.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;

  constructor(
    private router: Router,
    private rout: ActivatedRoute,
    private authservice: AuthService,
    private articleservice: ArticleService
  ) { }

  ngOnInit() {
    this.rout.params.subscribe( (params: Params) => {
      this.title = params['title'];
      console.log(params);
    },error => console.log(error));
  }
  logout() {
    this.authservice.logout();
    this.router.navigate(['/login'], { queryParams: { accessDenied: true }});
  }
}
