import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { getCounter } from '../../counter/state/counter.selector';
import { Post } from '../../models/post.model';
import { getPosts } from '../state/post.selector';


@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrl: './postslist.component.css'
})
export class PostslistComponent implements OnInit {

  posts!: Observable<Post[]>;

  constructor(private store : Store <AppState>){}


  ngOnInit(): void {
    this.posts = this.store.select(getPosts);

  }

}
