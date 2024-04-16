import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrl: './question-component.component.css'
})
export class QuestionComponentComponent {
  @Input() showQuestion:boolean = false;
}
