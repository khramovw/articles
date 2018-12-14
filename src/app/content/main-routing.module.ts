import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Services
import { AuthGuard } from '../share/services/auth.guard';

// Components
import { MainComponent } from './main.component';
import { ArticleComponent } from './article/article.component';
import { ComentsComponent } from './coments/coments.component';
import { ArticlePageComponent } from './article/article-page/article-page.component';


const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [AuthGuard], children: [
      {path: 'article', component: ArticleComponent},
      {path: 'article/:id/:title', component: ArticlePageComponent},
      {path: 'comments', component: ComentsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
