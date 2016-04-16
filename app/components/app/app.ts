/**
 * Created by panzhichao on 16/4/13.
 */
import {Component} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {NewsComponent} from '../news/news'
import {NewsService} from '../../services/news'

@Component({
  selector: 'app',
  template: `<news></news>`,
  directives: [NewsComponent],
  providers: [HTTP_PROVIDERS, NewsService]
})

export class AppComponent {
  title = 'News';
}

