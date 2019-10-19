import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(private router: Router) {

    }
    medicalAttention() {
        this.playAudio();
        // this.router.navigate(['/binaryoptions']);
    }

    playAudio() {
        const audio = new Audio();
        audio.src = '../../sounds/alarm_clock_1.wav';
        audio.load();
        audio.play();
    }

    dogNeeds() {
        console.log('I have needs');
    }
}
