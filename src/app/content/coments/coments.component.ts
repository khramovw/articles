import {Component, Input, OnInit} from '@angular/core';

// Models
import { Comment } from '../../share/Models/comment';

// Services
import {CommentsService} from '../share/services/comments.service';
import {finalize} from 'rxjs/operators';


@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent implements OnInit {

  @Input() articleid: number;
  comments;
  networksLoaded = false;

  constructor(private commentsservice: CommentsService) { }

  ngOnInit() {
    // I am getting article comments.
    this.commentsservice.getComents(this.articleid)
      .pipe(finalize(() => {
        this.networksLoaded = true;
      }))
      .subscribe(( comments: Comment[]) => {
      console.log('comments', comments);
      comments.length === 0 ? this.comments = [{title: 'There are no comments yet'}] : this.comments = comments;
    });
  }
}
