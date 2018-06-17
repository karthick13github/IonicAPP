import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ReviewsProvider} from '../../providers/reviews/reviews';

/**
 * Generated class for the ReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
})
export class ReviewsPage {
reviews:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private  rs:ReviewsProvider) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewsPage');
     this.rs.getReviews().subscribe(
       (data)=>{
         this.reviews=data;
       },
       (error)=>{
         this.reviews=[];
       });
  }

}
