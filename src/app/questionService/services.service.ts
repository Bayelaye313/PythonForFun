import { Injectable } from '@angular/core';
import { Question } from '../question.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  questions: Question[] = [];

  constructor(private http: HttpClient) { 
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.http.get<Question[]>('assets/questions.json')
      .subscribe(questions => {
        this.questions = questions;
      });
  }
}
