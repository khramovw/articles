import {Component, Input, OnInit} from '@angular/core';

// Models
import { Comment } from '../../share/Models/comment';

// Services
import {CommentsService} from '../share/services/comments.service';


@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.scss']
})
export class ComentsComponent implements OnInit {

  @Input() articleid: number;
  comments;

  constructor(private commentsservice: CommentsService) { }

  ngOnInit() {
    // I am getting article comments.
    this.commentsservice.getComents(this.articleid).subscribe(( comments: Comment[]) => {
      comments.length === 0 ? this.comments = [{title: 'There are no comments yet'}] : this.comments = comments;
    });
  }
}
