import { Injectable, OnInit} from '@angular/core';
import { Question } from '../question.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  questions: Question[] = [];
  private questionUrl = 'assets/question.json';
  private questionsAskedIds: number[] = [];

  constructor(private http: HttpClient) { 
    this.loadQuestions();
  }
  ngOnInit():void{
    this.loadQuestions()
  }

  loadQuestions(): Observable<void> {
    return this.http.get<Question[]>(this.questionUrl)
      .pipe(
        map(questions => {
          this.questions = questions;
        })
      );
  }  
  getRandomQuestion(): Question | null {
    if (this.questions.length === 0 || this.questionsAskedIds.length === 30) {
      return null; // Toutes les questions ont été posées ou la limite de 30 a été atteinte
    }

    let randomQuestion: Question | null = null;
    let attempts = 0;
    const maxAttempts = 100; // Limite d'essais pour éviter une boucle infinie
    
    do {
      const randomIndex = Math.floor(Math.random() * this.questions.length);
      randomQuestion = this.questions[randomIndex];
      attempts++;

      // Vérifie si l'identifiant de la question aléatoire n'a pas déjà été posé
      if (!this.questionsAskedIds.includes(randomQuestion.questionId)) {
        // Ajoute l'identifiant de la question à la liste des questions posées
        this.questionsAskedIds.push(randomQuestion.questionId);
        return randomQuestion;
      }
    } while (attempts < maxAttempts);

    return null; // Échec de la recherche d'une question unique après un certain nombre d'essais
  }  shuffleOptions(question: Question): Question {
    const shuffledOptions = question.options.slice(); // Copie des options
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]]; // Permutation aléatoire
    }
    return { ...question, options: shuffledOptions }; // Retourne une nouvelle question avec les options mélangées
  }
}
