import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


// Models
import { Comment } from '../../../share/Models/comment';

// Base Api
import { BaseApi } from '../config/base-api';

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends BaseApi {
  constructor( public http: HttpClient ) {
    super( http );
  }

  // get comments on the article
  getComents (id: number): Observable <Comment[]> {
    return this.get( true, `article/${id}/comment`);
  }
}
