import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

/*
  Generated class for the ReviewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReviewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ReviewsProvider Provider');
  }

  getReviews():Observable<Object>{
    return this.http.get("http://139.59.9.236:8898/rest-api/reviews");

  }

}
