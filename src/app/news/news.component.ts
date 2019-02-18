import { Component, OnInit } from "@angular/core";

import { NewsService } from "../news.service";
import { News } from "../news";

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "getHostName" })
export class getHostNamePip implements PipeTransform {
  getLocation(href: string) {
    const h = document.createElement("a");
    h.href = href;
    return h;
  }

  transform(value: string): string {
    return this.getLocation(value).hostname;
  }
}

@Component({
  selector: "news",
  templateUrl: `./news.component.html`,
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  constructor(private _newsService: NewsService) {}

  errorMessage: string;
  news: News[] = [];
  loading: boolean = true;
  page: number = 0;

  ngOnInit() {
    this.fetchNews(0);
  }

  onScroll() {
    if (
      window.innerHeight + window.scrollY > document.body.offsetHeight &&
      !this.loading
    ) {
      this.fetchNews(++this.page);
    }
  }

  fetchNews(page: number) {
    this.loading = true;
    this._newsService.getNewsRemote(page).subscribe(
      (news: any) => {
        this.loading = false;
        this.news.push(news);
      },
      error => {
        console.log(error);
        this.errorMessage = <any>error;
      }
    );
  }
}
