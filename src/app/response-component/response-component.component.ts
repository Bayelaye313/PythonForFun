import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-response-component',
  templateUrl: './response-component.component.html',
  styleUrl: './response-component.component.css'
})
export class ResponseComponentComponent {
  @Input() showResult : boolean = false;
  @Input() scoreFinal : number = 0;

  @Output() restartGame = new EventEmitter<void>();
  @Output() exitGame = new EventEmitter<void>();
  

  QuitQuizz(){this.exitGame.emit()};
  ReplayQuizz(){this.restartGame.emit()};
}
