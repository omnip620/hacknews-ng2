/**
 * Created by panzhichao on 16/4/13.
 */

import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {News} from '../schemas/news'

@Injectable()
export class NewsService {
  news:News[] = [
    {
      "by": "akavel",
      "descendants": 2,
      "id": 11510649,
      "kids": [
        11511371,
        11511346
      ],
      "score": 58,
      "time": 1460815932,
      "title": "The Cuneiform Tablets of 2015 [pdf]",
      "type": "story",
      "url": "http://www.vpri.org/pdf/tr2015004_cuneiform.pdf"
    },
    {
      "by": "robinhouston",
      "descendants": 4,
      "id": 11511269,
      "kids": [
        11511324
      ],
      "score": 12,
      "time": 1460825675,
      "title": "Unixâ€™s file durability problem",
      "type": "story",
      "url": "https://utcc.utoronto.ca/~cks/space/blog/unix/FileSyncProblem"
    },
    {
      "by": "rowanseymour",
      "descendants": 89,
      "id": 11510349,
      "kids": [
        11510900,
        11511154,
        11511368,
        11511317,
        11511195,
        11511069,
        11510929,
        11510988
      ],
      "score": 70,
      "time": 1460810238,
      "title": "In Cramped and Costly Bay Area, Cries to Build, Baby, Build",
      "type": "story",
      "url": "http://www.nytimes.com/2016/04/17/business/economy/san-francisco-housing-tech-boom-sf-barf.html"
    },
    {
      "by": "max_",
      "descendants": 18,
      "id": 11510199,
      "kids": [
        11510987,
        11510304,
        11510524,
        11511125,
        11510581
      ],
      "score": 113,
      "time": 1460806341,
      "title": "TensorFlow: Large-Scale Machine Learning on Distributed Systems (2015) [pdf]",
      "type": "story",
      "url": "http://download.tensorflow.org/paper/whitepaper2015.pdf"
    },
    {
      "by": "mmariani",
      "descendants": 5,
      "id": 11510898,
      "kids": [
        11511245,
        11511103
      ],
      "score": 21,
      "time": 1460820091,
      "title": "Jaspy â€“ A Python VM written in JavaScript",
      "type": "story",
      "url": "https://github.com/koehlma/jaspy/blob/master/README.rst"
    },
    {
      "by": "podcastrank",
      "descendants": 73,
      "id": 11509835,
      "kids": [
        11510598,
        11510180,
        11510577,
        11510224,
        11510539,
        11511218,
        11510238,
        11510564,
        11510414,
        11510868,
        11510862,
        11510298,
        11510228,
        11510096,
        11510226,
        11510468,
        11510794,
        11511177,
        11510482,
        11510220,
        11510489,
        11510286,
        11510107,
        11510280,
        11510348,
        11510571,
        11510214,
        11510084,
        11510355,
        11510301,
        11510227,
        11510740,
        11510259,
        11510326,
        11510480,
        11509836,
        11510067,
        11510087,
        11510454,
        11510104
      ],
      "score": 206,
      "time": 1460795651,
      "title": "Show HN: I made a Hacker News for podcasts",
      "type": "story",
      "url": "https://podcastrank.co/"
    },
    {
      "by": "tbrownaw",
      "descendants": 127,
      "id": 11508518,
      "kids": [
        11508943,
        11508733,
        11508861,
        11509902,
        11509396,
        11511022,
        11510105,
        11509927,
        11508720,
        11509320,
        11508903,
        11509321,
        11508854,
        11508855,
        11510083,
        11508734,
        11508831,
        11509855,
        11508716,
        11509960,
        11509039,
        11509052
      ],
      "score": 424,
      "time": 1460765043,
      "title": "Keeping secrecy the exception, not the rule",
      "type": "story",
      "url": "http://blogs.microsoft.com/on-the-issues/2016/04/14/keeping-secrecy-exception-not-rule-issue-consumers-businesses/"
    },
    {
      "by": "madospace",
      "descendants": 19,
      "id": 11510444,
      "kids": [
        11510637,
        11511067,
        11510773,
        11510939,
        11510542,
        11510525,
        11510800
      ],
      "score": 50,
      "time": 1460812212,
      "title": "Global Task Exchange Protocol",
      "type": "story",
      "url": "https://github.com/madhugb/Global-Task-Exchange-Protocol"
    },
    {
      "by": "coolvoltage",
      "descendants": 3,
      "id": 11509895,
      "kids": [
        11510344,
        11510231
      ],
      "score": 86,
      "time": 1460797422,
      "title": "Tensorflow - Play with neural networks!",
      "type": "story",
      "url": "https://github.com/tensorflow/playground"
    },
    {
      "by": "idnan",
      "descendants": 10,
      "id": 11510207,
      "kids": [
        11510865,
        11510360,
        11511147,
        11510771,
        11510802
      ],
      "score": 38,
      "time": 1460806537,
      "title": "Chrome extension â€“ Replaces new tab with random GitHub user's profile",
      "type": "story",
      "url": "https://github.com/Idnan/git-random"
    },
    {
      "by": "samsolomon",
      "descendants": 120,
      "id": 11508551,
      "kids": [
        11509095,
        11508837,
        11510314,
        11508803,
        11509420,
        11509080,
        11509857,
        11510911,
        11510387,
        11510411,
        11510184,
        11509256,
        11508984,
        11509402,
        11510272,
        11510292,
        11509163,
        11508799,
        11509263,
        11509139
      ],
      "score": 203,
      "time": 1460765690,
      "title": "When Lobbying was Illegal",
      "type": "story",
      "url": "http://priceonomics.com/when-lobbying-was-illegal/"
    },
    {
      "by": "karmacondon",
      "descendants": 95,
      "id": 11509160,
      "kids": [
        11509530,
        11511326,
        11511345,
        11509767,
        11510764,
        11510607,
        11509511,
        11510638,
        11510866,
        11510534,
        11509578,
        11509537,
        11509486,
        11509736,
        11509483,
        11509752,
        11509674,
        11510549,
        11510633,
        11509673,
        11509510,
        11510972,
        11510038,
        11509996,
        11509868,
        11509764,
        11509982,
        11509694,
        11509532
      ],
      "score": 133,
      "time": 1460777257,
      "title": "Sorry, You Canâ€™t Speed Read",
      "type": "story",
      "url": "http://www.nytimes.com/2016/04/17/opinion/sunday/sorry-you-cant-speed-read.html"
    },
    {
      "by": "mattiemass",
      "descendants": 6,
      "id": 11510013,
      "kids": [
        11510451,
        11510416
      ],
      "score": 41,
      "time": 1460801398,
      "title": "Designing the Scylla Userspace Disk I/O Scheduler (Part 1)",
      "type": "story",
      "url": "http://www.scylladb.com/2016/04/14/io-scheduler-1/"
    },
    {
      "by": "yxlx",
      "descendants": 122,
      "id": 11508313,
      "kids": [
        11510818,
        11509661,
        11509543,
        11509429,
        11508748,
        11509687,
        11508964,
        11508726,
        11508952,
        11509171,
        11510546,
        11509251,
        11509034,
        11508974,
        11508586,
        11509302,
        11508737,
        11509706,
        11508876
      ],
      "score": 265,
      "time": 1460761922,
      "title": "Study of non-programmers' solutions to programming problems [pdf]",
      "type": "story",
      "url": "http://www.cs.ucr.edu/~ratana/PaneRatanamahatanaMyers00.pdf"
    },
    {
      "by": "ingve",
      "descendants": 3,
      "id": 11510072,
      "kids": [
        11510956,
        11510927,
        11510825
      ],
      "score": 32,
      "time": 1460802910,
      "title": "Awesome-cpus: All CPU and MCU documentation in one place",
      "type": "story",
      "url": "https://github.com/larsbrinkhoff/awesome-cpus"
    },
    {
      "by": "iamkeyur",
      "descendants": 29,
      "id": 11509921,
      "kids": [
        11510020,
        11510986,
        11510645,
        11510019,
        11510518,
        11511086
      ],
      "score": 225,
      "time": 1460798527,
      "title": "Google has started a video series on machine learning and I can understand it",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=cKxRvEZd3Mw"
    },
    {
      "by": "another",
      "descendants": 0,
      "id": 11510755,
      "score": 3,
      "kids": [],
      "time": 1460817818,
      "title": "The Rarest Pig",
      "type": "story",
      "url": "https://ultraphyte.com/2016/04/10/the-rarest-pig/"
    },
    {
      "by": "empressplay",
      "descendants": 39,
      "id": 11510212,
      "kids": [
        11511344,
        11510955,
        11510295,
        11510474,
        11510322,
        11510406,
        11510957,
        11510744,
        11510446,
        11511238,
        11510385
      ],
      "score": 75,
      "time": 1460806647,
      "title": "Apple recovered 2,204 pounds of gold from broken iPhones last year",
      "type": "story",
      "url": "http://money.cnn.com/2016/04/15/technology/apple-gold-recycling/index.html"
    },
    {
      "by": "bane",
      "descendants": 13,
      "id": 11508755,
      "kids": [
        11510515,
        11509133,
        11511089,
        11510195,
        11509748
      ],
      "score": 112,
      "time": 1460768850,
      "title": "1995 Programming on the Sega Saturn",
      "type": "story",
      "url": "http://cowboyprogramming.com/2010/06/03/1995-programming-on-the-sega-saturn/"
    },
    {
      "by": "tosseraccount",
      "descendants": 39,
      "id": 11508561,
      "kids": [
        11509393,
        11509309,
        11510992,
        11509018,
        11508993,
        11509087,
        11510938,
        11509600,
        11508858,
        11509609,
        11509610,
        11510160
      ],
      "score": 119,
      "time": 1460765883,
      "title": "How old were the inventors of major inventions?",
      "type": "story",
      "url": "http://andolfatto.blogspot.com/2016/04/how-old-were-inventors-of-major.html"
    }
  ];


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

  getNewsRemote(i) {
    if (!this.newsIDs.length) {
      return this.http.get(this._newsIdsUrl).toPromise()
        .then(res=>this.newsIDs = res.json())
        .then(data=>this.getNewsHandle(data.slice(0, 20)))
        .catch(this.handleError)
    }
    return this.getNewsHandle(this.newsIDs.slice(i * 10, i * 10 + 20));
  }

  getNewsHandle(ids:number[]) {
    let self = this;
    return Promise
      .all(ids.map((item)=>self.http.get(self._newsDetailUrl(item)).toPromise()))
      .then(data=>data.map((item:any)=> item.json()))
  }

  getNews() {
    return this.news
  }
}