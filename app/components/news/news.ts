import {Component, OnInit} from 'angular2/core';

import {NewsService} from '../../services/news';
import {News} from '../../schemas/news'


import {Pipe, PipeTransform} from 'angular2/core';


@Pipe({name: 'getHostName'})
export class getHostName implements PipeTransform {
  getLocation(href:string) {
    var l = document.createElement("a");
    l.href = href;
    return l;
  };

  transform(value:string):string {
    return this.getLocation(value).hostname;
  }
}

@Component({
  selector: 'news',
  templateUrl: `app/components/news/news.html`,
  providers: [NewsService],
  styleUrls: ['app/components/news/news.css'],
  pipes:[getHostName]
})

export class NewsComponent implements OnInit {

  constructor(private _newsService:NewsService) {
  }

  errorMessage:string;
  news:News[];

  ngOnInit() {
    this._newsService.getNewsRemote().then(
      news=> {
        console.log(news)
        this.news = news;
      },
      error=>this.errorMessage = <any>error);
  }
}