import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from '../questionService/services.service';
import { Question } from '../question.interface';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrl: './question-component.component.css'
})
export class QuestionComponentComponent implements OnInit{
  @Input() showQuestions:boolean = false;
  currentQuestion: Question | undefined;
  correctAnswerCount: number = 0;
  currentQuestionIndex: number = 1;
  totalQuestions: number = 30;

  remainingTime:number = 10;

  timer = interval(1000);
  timerSubscription: Subscription | undefined;

  constructor(private questionServe: ServicesService){ }
  ngOnInit(){
    this.getQuestions();
  }
  ngOnDestroy() {
    this.stopTimer();
  }
  getQuestions() {
    this.questionServe.loadQuestions().subscribe(()=>{
    this.currentQuestion = this.questionServe.getRandomQuestion();
    if (this.currentQuestion) {
      this.currentQuestion = this.questionServe.shuffleOptions(this.currentQuestion);
      this.remainingTime = 15;
      this.startTimer();
  
    } 
   });
  }
  startTimer() {
    this.stopTimer();
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        this.nextQuestion(); // Passage automatique à la question suivante lorsque le temps est écoulé
      }
    });
  }
  stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
  optionSelected(option: any) {
    if (!option.isSelected) {
      option.isSelected = true;

      if (option.isCorrect) {
        this.correctAnswerCount++;
      }

      // Désactiver les autres options
      this.currentQuestion?.options.forEach((opt) => {
        if (opt !== option) {
          opt.isDisabled = true;
        }
      });

      this.stopTimer(); // Arrêter le chronomètre lorsqu'une option est sélectionnée
    }
  }

  nextQuestion() {
    // Arrêtez le chronomètre si l'utilisateur passe à la question suivante avant la fin du temps imparti
    // Passez à la question suivante
    if (this.currentQuestionIndex < this.totalQuestions) {
      this.currentQuestionIndex++;
      this.getQuestions();
    } else {
  }
}
  
}
