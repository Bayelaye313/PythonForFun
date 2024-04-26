import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-info-component',
  templateUrl: './info-component.component.html',
  styleUrl: './info-component.component.css'
})
export class InfoComponentComponent
{
  @Input() showInfos : boolean = false;
  @Output() exitGame = new EventEmitter<void>();
  @Output() playGame = new EventEmitter<void>();

  QuitQuizz(){this.exitGame.emit()};
  ContinueQuizz(){this.playGame.emit()};
}
