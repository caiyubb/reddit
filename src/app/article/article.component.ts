import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class:'row' //在宿主元素，也就是app-article标签上设置class属性，使其具有row类
  }
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor() {
    this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10
    )
   }
  voteUp():boolean {
    this.article.votes += 1;
    return false;
  }
  voteDown():boolean {
    this.article.votes -= 1;
    return false;
  }

  ngOnInit() {
  }

}
