import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    private REST_API_SERVER = "http://localhost:8080";
    testResult: any;
    constructor(private router: Router, private httpClient: HttpClient) {

    }
    test() {
      this.httpClient.get('http://localhost:8080/users')
        .subscribe(result => {
          this.testResult = result;
        });
        console.log("4");
        console.log(this.testResult);
        console.log("5");
    }

    medicalAttention() {
        // this.playAudio();
        console.log("1");
        this.test();
        console.log("2");
        this.httpClient.get('http://localhost:8080/alert')
        console.log("3");
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
