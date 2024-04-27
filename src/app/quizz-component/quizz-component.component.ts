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
  showQuestions:boolean = false;
  showInfo:boolean = false;
  showResults:boolean = false;
  result:number = 0;

  onStarted(){
  this.IsStarted = true;
  this.showQuestions = true;
  this.showInfo = false;
  this.showResults = false;
  }
  showInfoPop()
  {
    this.showInfo = true;
  }
  showResultPop(){
      this.showResults = true;
  }

  quitGame()
  {
    this.IsStarted = false;
    this.showInfo = false;
    this.showResults = false;
  }
  finishGame(score:number){
    this.result = score;
    this.IsStarted = false;
    this.showResultPop();
    this.showQuestions = false;
  }
}
