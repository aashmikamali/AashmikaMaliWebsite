import { Component } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// import * as firebase from 'firebase';
// import { AngularFireDatabase, FirebaseObject } from 'angularfire2/database';

// import firestore from 'firebase/firestore';
// const firebase = {};
// const firestore = {};
const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: "AIzaSyD0HAZJKieHSjKFf1_tBbY9IJmBN44V1K4",
  authDomain: "aashmika-website.firebaseapp.com",
  databaseURL: "https://aashmika-website.firebaseio.com",
  projectId: "aashmika-website",
  storageBucket: "",
  messagingSenderId: "330065296005",
  appId: "1:330065296005:web:f9653b2b3870b76d"
};

class PageCount{
  constructor(public title){}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Aashmika Mali';
  links = ['Home', 'Second', 'Third'];
  activeLink = this.links[0];
  background = '';
  centered = false;
  disabled = false;
  unbounded = false;
    items: Observable<any[]>;
  service: any;

  radius: number;
  color: string;
  toggleBackground() {
    this.background = this.background ? '' : 'secondary';
  }
  ngOnInit() {
    // firebase.initializeApp(config);
    // firebase.firestore().settings(settings);
    // this.service.incrementPageCount().then(data => this.service.changeCount(data));
  }
  // public PageCount: FirebaseObject<PageCount>;
  // constructor(db: AngularFireDatabase) {
  //     this.PageCount = db.object('/PageCount');
  // }
}
