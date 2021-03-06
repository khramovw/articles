import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

// Models
import { Article} from '../../../share/Models/article';

// Services
import { ArticleService } from '../../share/services/article.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  id: number;
  article: Article;
  title: string;
  content: string;
  networksLoaded = false;

  constructor(
    private router: Router,
    private  rout: ActivatedRoute,
    private articleservices: ArticleService
  ) { }

  ngOnInit() {
    // from the address bar getting the parameter
    this.id = +this.rout.snapshot.params['id'];

    // I get an article with the given parameters.
    this.articleservices.getArticlePage(this.id)
      .pipe(finalize(() => {
        this.networksLoaded = true;
      }))
      .subscribe( (article: Article) => {
      this.article = article;
      this.title = this.article.title;
      this.content = this.article.body;
    });
  }
}
