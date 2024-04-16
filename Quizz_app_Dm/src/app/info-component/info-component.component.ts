import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-info-component',
  templateUrl: './info-component.component.html',
  styleUrl: './info-component.component.css'
})
export class InfoComponentComponent {
  @Input() showInfo: boolean = false;
  @Output() QuitQuizzEvent = new EventEmitter<void>();
  @Output() ContinueQuizzEvent = new EventEmitter<void>();

  QuitQuizz(){
    this.QuitQuizzEvent.emit();
  }
  ContinueQuizz(){
    this.ContinueQuizzEvent.emit();
  }

}
