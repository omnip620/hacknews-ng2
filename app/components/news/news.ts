import {Component, OnInit} from 'angular2/core';

import {NewsService} from '../../services/news';
import {News} from '../../schemas/news'

import {Pipe, PipeTransform} from 'angular2/core';
import {Theme} from '../theme/theme';


@Pipe({name: 'getHostName'})
export class getHostName implements PipeTransform {
  getLocation(href:string) {
    var h = document.createElement("a");
    h.href = href;
    return h;
  };

  transform(value:string):string {
    return this.getLocation(value).hostname;
  }
}


@Component({
  selector: 'news',
  templateUrl: `app/components/news/news.html`,
  directives: [Theme],
  providers: [NewsService],
  pipes: [getHostName],
  styleUrls: ['app/components/news/news.css']
})
export class NewsComponent implements OnInit {
  constructor(private _newsService:NewsService) {
  }

  errorMessage:string;
  news:News[] = [];
  loading:boolean = true;
  page:number = 0;

  ngOnInit() {
    // this.news = this._newsService.getNews();
    this.fetchNews(0);
  }


  onScroll() {
    if ((window.innerHeight + window.scrollY) > document.body.offsetHeight && !this.loading) {
      this.fetchNews(++this.page)
    }
  }

  fetchNews(page) {
    this.loading = true;
    this._newsService.getNewsRemote(page).then(
      news=> {
        this.loading = false;
        this.news.push(...news)
      },
      error=>this.errorMessage = <any>error);
  }
}