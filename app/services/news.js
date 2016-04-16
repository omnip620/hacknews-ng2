/**
 * Created by panzhichao on 16/4/13.
 */
System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var NewsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            NewsService = (function () {
                function NewsService(http) {
                    var _this = this;
                    this.http = http;
                    this.news = [{
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
                    this._baseUrl = 'https://hacker-news.firebaseio.com/v0/';
                    this._newsIdsUrl = this._baseUrl + "topstories.json?print=pretty";
                    this._newsDetailUrl = function (id) { return (_this._baseUrl + "item/" + id + ".json?print=pretty"); };
                    this.newsIDs = [];
                }
                NewsService.prototype.handleError = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                NewsService.prototype.getNewsRemote = function () {
                    var _this = this;
                    if (!this.newsIDs.length) {
                        return this.http.get(this._newsIdsUrl).toPromise()
                            .then(function (res) { return _this.newsIDs = res.json(); })
                            .then(function (data) { return _this.getNewsHandle(data.slice(0, 20)); })
                            .catch(this.handleError);
                    }
                    return this.getNewsHandle(this.newsIDs.slice(0, 20));
                };
                NewsService.prototype.getNewsHandle = function (ids) {
                    var self = this;
                    return Promise
                        .all(ids.map(function (item) { return self.http.get(self._newsDetailUrl(item)).toPromise(); }))
                        .then(function (data) { return data.map(function (item) { return item.json(); }); });
                };
                NewsService.prototype.getNews = function () {
                    return this.news;
                };
                NewsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], NewsService);
                return NewsService;
            }());
            exports_1("NewsService", NewsService);
        }
    }
});
//# sourceMappingURL=news.js.map