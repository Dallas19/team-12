import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    testResult: any;
    constructor(private router: Router, private http: HttpClient) {

    }
    test() {
      this.http.get('/users')
        .subscribe(result => {
          this.testResult = result;
        });
        console.log(this.testResult);
    }

    medicalAttention() {
        // this.playAudio();
        console.log("1");
        this.test();
        console.log("2");
        this.http.get('/alert')
        this.router.navigate(['/binaryoptions']);
    }

    // playAudio() {
    //     const audio = new Audio();
    //     audio.src = '../../sounds/alarm_clock_1.wav';
    //     audio.load();
    //     audio.play();
    // }

    dogNeeds() {
        console.log('I have needs');
    }
}
