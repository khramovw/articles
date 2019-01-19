import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// Routing
import { MainRoutingModule } from './main-routing.module';

// Modules
import { ShareModule } from '../share/share.module';
import { NgxPaginationModule } from 'ngx-pagination';

// Pipes
import { SlicetextPipe } from './share/pipes/slicetext.pipe';

// Components
import { MainComponent } from './main.component';
import { ArticleComponent } from './article/article.component';
import { ComentsComponent } from './coments/coments.component';
import { ArticlePageComponent } from './article/article-page/article-page.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    ShareModule,
    BrowserModule,
    NgxPaginationModule
  ],
  declarations: [
    MainComponent,
    ArticleComponent,
    ComentsComponent,
    SlicetextPipe,
    ArticlePageComponent,
    HeaderComponent
  ]
})
export class MainModule { }
