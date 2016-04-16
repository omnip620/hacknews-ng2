/**
 * Created by panzhichao on 16/4/13.
 */

import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {News} from '../schemas/news'

@Injectable()
export class NewsService {
  news:News[] = [{
    "by": "dhouston",
    "descendants": 71,
    "id": 8863,
    "kids": [8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876],
    "score": 111,
    "time": 1175714200,
    "title": "My YC app: Dropbox - Throw away your USB drive",
    "type": "story",
    "url": "http://www.getdropbox.com/u/2/screencast.html"
  }];


  constructor(private http:Http) {
  }

  private _baseUrl = 'https://hacker-news.firebaseio.com/v0/';

  private _newsIdsUrl = `${this._baseUrl}topstories.json?print=pretty`;
  private _newsDetailUrl = id=> `${this._baseUrl}item/${id}.json?print=pretty`;
  private newsIDs = [];

  private handleError(error:Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  getNewsRemote() {
    if (!this.newsIDs.length) {
      return this.http.get(this._newsIdsUrl).toPromise()
        .then(res=>this.newsIDs = res.json())
        .then(data=>this.getNewsHandle(data.slice(0, 20)))
        .catch(this.handleError)
    }
    return this.getNewsHandle(this.newsIDs.slice(0, 20));
  }

  getNewsHandle(ids:number[]) {
    let self = this;
    return Promise
      .all(ids.map((item)=>self.http.get(self._newsDetailUrl(item)).toPromise()))
      .then(data=>data.map(item=> item.json()))
  }

  getNews() {
    return this.news
  }
}