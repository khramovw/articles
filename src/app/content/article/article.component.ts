import { Component, OnInit } from '@angular/core';

// Models
import { Article} from '../../share/Models/article';

// Services
import { ArticleService } from '../share/services/article.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles;
  title;

  constructor(
    private articleservice: ArticleService,
  ) { }

  ngOnInit() {
    // I get all the articles.
    this.articleservice.getArticles().subscribe( (articles: Article[]) => this.articles = articles);
  }
}
