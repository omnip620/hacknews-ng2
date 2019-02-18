/**
 * Created by panzhichao on 16/4/13.
 */

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, from } from "rxjs";
import {
  catchError,
  mergeMap,
  tap,
  map,
  take,
  switchMap
} from "rxjs/operators";
import { News } from "./news";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: "root" })
export class NewsService {
  news: News[] = [];

  constructor(private http: HttpClient) {}

  private _baseUrl = "https://hacker-news.firebaseio.com/v0/";

  private _newsIdsUrl = `${this._baseUrl}topstories.json?print=pretty`;
  private _newsDetailUrl = (id: string | number) =>
    `${this._baseUrl}item/${id}.json?print=pretty`;
  private newsIDs: number[] = [];

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getNewsRemote(page: number) {
    if (!this.newsIDs.length) {
      // return this.http
      //   .get(this._newsIdsUrl)
      //   .toPromise()
      //   .then((res: number[]) => {
      //     this.newsIDs = res;
      //     return res;
      //   })
      //   .then(data => this.getNewsHandle(data.slice(0, 20)))
      //   .catch(this.handleError);

      return this.http.get<number[]>(this._newsIdsUrl).pipe(
        map(data => {
          this.newsIDs = data;
          return data.slice(0, 20);
        }),
        switchMap(data => {
          return this.getNewsHandleO(data);
        }),
        catchError(this.handleError)
      );
    }

    return this.getNewsHandleO(this.newsIDs.slice(page * 20, page * 20 + 20));
  }
  getNewsHandleO(ids: number[]) {
    return from(ids).pipe(
      mergeMap(id => this.http.get(this._newsDetailUrl(id)))
    );
  }

  getNewsHandle(ids: number[]) {
    let self = this;
    return Promise.all(
      ids.map(item => self.http.get(self._newsDetailUrl(item)).toPromise())
    ).then(data => {
      console.log(data);
      return data;
    });
  }

  getNews() {
    return this.news;
  }
}
