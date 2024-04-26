import { Component } from '@angular/core';

@Component(
{
  selector: 'app-quizz-component',
  templateUrl: './quizz-component.component.html',
  styleUrl: './quizz-component.component.css'
})
export class QuizzComponentComponent
{
  IsStarted:boolean = false;
  isEnded: boolean = false;
  showQuestions:boolean = false;
  showInfo:boolean = false;

  onStarted(){
  this.IsStarted = true;
  this.showQuestions = true;
  this.showInfo = false;
  this.isEnded = false;  
  }
  showInfoPop()
  {
    this.showInfo = true;
  }

  quit()
  {
    this.IsStarted = false;
    this.showInfo = false;
  }
  finish(){
    this.isEnded = true;
    this.IsStarted = false
  }
}
