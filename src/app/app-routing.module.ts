import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent }   from './news/news.component';


const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}