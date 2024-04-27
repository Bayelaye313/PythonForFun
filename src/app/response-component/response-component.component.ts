import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-response-component',
  templateUrl: './response-component.component.html',
  styleUrl: './response-component.component.css'
})
export class ResponseComponentComponent implements OnInit {
  constructor(){};
  ngOnInit(): void {}
  @Input() showResult : boolean = false;
  @Input() scoreFinal : number = 0;

  @Output() restartGame = new EventEmitter<void>();
  @Output() quitGame = new EventEmitter<void>();
  

  QuitQuizz(){this.quitGame.emit()};
  ReplayQuizz(){this.restartGame.emit()};
}
