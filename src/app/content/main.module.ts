import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { MainRoutingModule } from './main-routing.module';

// Modules
import { ShareModule } from '../share/share.module';

// Components
import { MainComponent } from './main/main.component';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    ShareModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
