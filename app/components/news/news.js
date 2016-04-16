System.register(['angular2/core', '../../services/news'], function(exports_1, context_1) {
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
    var core_1, news_1, core_2;
    var getHostName, NewsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (news_1_1) {
                news_1 = news_1_1;
            }],
        execute: function() {
            getHostName = (function () {
                function getHostName() {
                }
                getHostName.prototype.getLocation = function (href) {
                    var l = document.createElement("a");
                    l.href = href;
                    return l;
                };
                ;
                getHostName.prototype.transform = function (value) {
                    return this.getLocation(value).hostname;
                };
                getHostName = __decorate([
                    core_2.Pipe({ name: 'getHostName' }), 
                    __metadata('design:paramtypes', [])
                ], getHostName);
                return getHostName;
            }());
            exports_1("getHostName", getHostName);
            NewsComponent = (function () {
                function NewsComponent(_newsService) {
                    this._newsService = _newsService;
                }
                NewsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._newsService.getNewsRemote().then(function (news) {
                        console.log(news);
                        _this.news = news;
                    }, function (error) { return _this.errorMessage = error; });
                };
                NewsComponent = __decorate([
                    core_1.Component({
                        selector: 'news',
                        templateUrl: "app/components/news/news.html",
                        providers: [news_1.NewsService],
                        styleUrls: ['app/components/news/news.css'],
                        pipes: [getHostName]
                    }), 
                    __metadata('design:paramtypes', [news_1.NewsService])
                ], NewsComponent);
                return NewsComponent;
            }());
            exports_1("NewsComponent", NewsComponent);
        }
    }
});
//# sourceMappingURL=news.js.map