import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  team: any[];

  constructor() {
    this.team = [{id: 2, name: 'Player 2'}, {id: 1, name: 'Player 1'}, {id: 3, name: 'Player 3'}];
  }
  }
