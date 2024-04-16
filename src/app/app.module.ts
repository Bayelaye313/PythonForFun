import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizzComponentComponent } from './quizz-component/quizz-component.component';
import { QuestionComponentComponent } from './question-component/question-component.component';
import { ResponseComponentComponent } from './response-component/response-component.component';
import { InfoComponentComponent } from './info-component/info-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponentComponent,
    QuestionComponentComponent,
    ResponseComponentComponent,
    InfoComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
