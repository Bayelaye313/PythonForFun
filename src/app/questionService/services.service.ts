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

  constructor(private http: HttpClient) {}
  ngOnInit():void{this.loadQuestions();}

  //loading questions from json file
  loadQuestions(): Observable<void>
  {
    return this.http.get<Question[]>(this.questionUrl)
      .pipe(
        map(questions => {
          this.questions = questions;
        }));
  }

  //getting random questions
  getRandomQuestion(): Question | null
  {
    if (this.questions.length === 0 || this.questionsAskedIds.length === 5)
      {return null;}

    let randomQuestion: Question | null = null;
    let attempts = 0;
    const maxAttempts = 100;
    
    do {
        const randomIndex = Math.floor(Math.random() * this.questions.length);
        randomQuestion = this.questions[randomIndex];
        attempts++;

        // Vérifie si l'identifiant de la question aléatoire n'a pas déjà été posé
        if (!this.questionsAskedIds.includes(randomQuestion.questionId))
          {
            this.questionsAskedIds.push(randomQuestion.questionId);
            return randomQuestion;
          }
      } while (attempts < maxAttempts);

    return null; 
}
  //varier les options de reponses
  shuffleOptions(question: Question): Question {
    const shuffledOptions = question.options.slice(); 
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]]; 
    }
    return { ...question, options: shuffledOptions };
  }
}