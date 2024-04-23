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
  timer:any;
  
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
  startTimer() {
    let secondsLeft = 15; // 15 secondes pour répondre à chaque question

    this.timer = setInterval(() => {
      secondsLeft--;

      if (secondsLeft === 0) {
        // Si le temps est écoulé et aucune option n'a été sélectionnée
        this.disableOptions();
        clearInterval(this.timer);
      }
    }, 1000);
  }

  disableOptions() {
    // Désactiver toutes les options
    // Vous devrez ajouter une propriété isDisabled à votre modèle de question pour le lier ici
    if (this.currentQuestion) {
      this.currentQuestion.options.forEach(option => {
        //option.isDisabled = true;
      });
    }
  }

  optionSelected(option: any) {
    // Arrêtez le chronomètre si une option est sélectionnée avant la fin du temps imparti
    clearInterval(this.timer);
    // Traitez la sélection de l'option ici
    // Vous devrez ajouter une logique pour déterminer si l'option est correcte ou incorrecte
    // et afficher une réponse en conséquence
  }

  nextQuestion() {
    // Arrêtez le chronomètre si l'utilisateur passe à la question suivante avant la fin du temps imparti
    clearInterval(this.timer);
    // Passez à la question suivante
    if (this.currentQuestionIndex < this.totalQuestions) {
      this.currentQuestionIndex++;
      this.getQuestions();
    } else {
      // Si toutes les questions ont été posées
      // Faites quelque chose ici, par exemple affichez un message ou redirigez l'utilisateur
    }
  }
}
