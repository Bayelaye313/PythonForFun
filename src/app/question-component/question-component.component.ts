import { Component, Input, OnInit } from '@angular/core';
import { ServicesService } from '../questionService/services.service';
import { Question } from '../question.interface';

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrl: './question-component.component.css'
})
export class QuestionComponentComponent implements OnInit{
  @Input() showQuestion:boolean = false;
  currentQuestionIndex: number = 1;
  totalQuestions: number = 30;
  currentQuestion: Question | undefined;
  
  constructor(private questionServe: ServicesService){ }
  ngOnInit(){
    this.getQuestions();
  }
  getQuestions() {
    this.questionServe.loadQuestions().subscribe(() => {
      this.currentQuestion = this.questionServe.getRandomQuestion();
      if (this.currentQuestion) {
        this.currentQuestion = this.questionServe.shuffleOptions(this.currentQuestion);
      }
    });
  }
  nextQuestion() {
    if (this.currentQuestionIndex < this.totalQuestions) {
      this.currentQuestionIndex++;
      this.getQuestions();
    } else {
      // Si toutes les questions ont été posées
      // Faites quelque chose ici, par exemple affichez un message ou redirigez l'utilisateur
    }
  }
}
