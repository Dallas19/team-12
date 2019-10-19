import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-binary-option',
  templateUrl: './binary-option.component.html',
  styleUrls: ['./binary-option.component.css']
})
export class BinaryOptionComponent {
  title = 'CanineAssistance-SPA';

  states = ['Low Blood Sugar', 'High Blood Sugar'];
  //statePicture = ["https://cdn.onlinewebfonts.com/svg/img_149898.png", "https://www.nicepng.com/png/full/20-207227_up-arrow-white-up-arrow-png.png"]
  currentState = 0;

constructor(private router: Router) {

}
  incrementCondition() {
    this.currentState += 1;
}

  yes() {

  }

  no() {
    if (this.currentState < this.states.length-1) {
        this.incrementCondition();
    } else {
        this.router.navigate(['../home']);
    }
  }
}
