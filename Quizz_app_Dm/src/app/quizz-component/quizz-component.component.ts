import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz-component',
  templateUrl: './quizz-component.component.html',
  styleUrl: './quizz-component.component.css'
})
export class QuizzComponentComponent {
  IsStarted:boolean = false;
  showInf:boolean = false;
  showQuestions:boolean = false;

  onStarted(){
    this.IsStarted == !this.IsStarted;
    this.showQuestions = true;
    this.showInf = false
    console.log('questions!!!!')
  }
  showInfoPop(){
    this.showInf = true;
  }
  quit(){
    this.IsStarted = false;
    this.showInf = false;
  }
}
