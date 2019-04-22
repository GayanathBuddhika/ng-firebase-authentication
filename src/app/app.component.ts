import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyARrzjzogMFykN4QCxX_ZdAzBZ4HFbkllo",
      authDomain: "survey-flatform-2cc63.firebaseapp.com"
    })
  }
  title = 'ng-firebase-authentication';
}
