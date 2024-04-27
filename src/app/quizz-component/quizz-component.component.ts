import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionComponentComponent } from '../question-component/question-component.component';

@Component(
{
  selector: 'app-quizz-component',
  templateUrl: './quizz-component.component.html',
  styleUrl: './quizz-component.component.css'
})
export class QuizzComponentComponent implements OnInit
{
  @ViewChild(QuestionComponentComponent) questionComponent: QuestionComponentComponent | undefined;
  ngOnInit(): void {
  }
  showQuestions:boolean = false;
  showInfo:boolean = false;
  showResults:boolean = false;
  result:number = 0;

  onStarted(){
  this.showQuestions = true;
  this.showInfo = false;
  this.showResults = false;
  this.result = 0;
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
    this.showInfo = false;
    this.showResults = false;
  }
  finishGame(score:number){
    this.result = score;
    this.showResultPop();
    this.showQuestions = false;
  }
  resetQuizFromParent() {
    console.log('Attempting to reset quiz from parent component...');
    if (this.questionComponent) {
      console.log('Resetting quiz in child component...');
      this.questionComponent.resetQuiz();
    }
  }
  exitGame(){
    this.showInfo = false;
    this.showResults = false;
    this.showQuestions = false;
    this.resetQuizFromParent();
  }
  startAgain(){
    this.resetQuizFromParent();
    this.showQuestions = true;
    this.showInfo = false;
    this.showResults = false;
    this.result = 0;  
}
}
