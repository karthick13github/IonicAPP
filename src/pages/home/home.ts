import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loadInfo(){
    this.navCtrl.push('InfoPage');
  }

  loadReviews(){
    this.navCtrl.push("ReviewsPage");
  }

}
