import { Component } from '@angular/core';

@Component({
  selector: 'app-binary-option',
  templateUrl: './binary-option.component.html',
  styleUrls: ['./binary-option.component.css']
})
export class BinaryOptionComponent {
  title = 'CanineAssistance-SPA';

  states = ['state1', 'state2', 'state3', 'state4'];
  currentState = 0;

  incrementCondition() {
    this.currentState += 1;
}

  yes() {

  }

  no() {
    if (this.currentState < this.states.length) {
        this.incrementCondition();
    } else {
        console.log('End of states');
    }
  }
}


