import { Component, OnInit } from '@angular/core';

// Models
import { Article} from '../../share/Models/article';

// Services
import { ArticleService } from '../share/services/article.service';
import {finalize} from 'rxjs/operators';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles;
  title;
  networksLoaded = false;
  p: number = 1;

  constructor(
    private articleservice: ArticleService,
  ) { }

  ngOnInit() {
    console.log('networksLoaded start', this.networksLoaded);
    // I get all the articles.
    this.articleservice.getArticles()
      .pipe(finalize(() => {
        this.networksLoaded = true;
      }))
      .subscribe( (articles: Article[]) => {
        console.log('articles', articles);
        this.articles = articles;
      }, error => console.log(error));
  }
}
