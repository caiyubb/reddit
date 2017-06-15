import { Component } from '@angular/core';
import { Article } from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Article[];

  constructor(){
    this.articles = [
      new Article('Hello','http://angular.io',3),
      new Article('World.','http://angular.io',1),
      new Article('You are so cute~','http://angular.io',1),
      
    ]
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement):boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));//添加一篇新文章加入article数组
    title.value = '';
    link.value = '';//清除input的值
    return false;
  }
}
