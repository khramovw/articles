import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// Models
import { Article } from '../../../share/Models/article';

// Base Api
import {BaseApi} from '../config/base-api';
import {filter, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticleService extends BaseApi {

  constructor( public http: HttpClient ) {
    super( http );
  }

  // The method returns all articles.
  getArticles (): Observable <Article[]> {
    return this.get(true, 'posts');
  }
  // The method returns the article on which the click occurred.
  getArticlePage (id?: number): Observable <Article> {
    return this.get(true, `posts/${id}`);
  }
}

