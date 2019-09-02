import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ServiceResponse } from '../models/service.model';

import {  Observable } from 'rxjs';

import {  map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiURL: any;

  private reviews: Observable<ServiceResponse>;

  constructor(private http: HttpClient) {
    this.apiURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu';
  }

  /**
  * Returns property DataService.reviews
  *
  * @remarks
  * This method get the apiURL with de review Observable
  *
  * @returns Observable<ServiceResponse>
  *
  * 
  */
  getReviews() {
    if (!this.reviews) this.reviews = this.http.get<ServiceResponse>(this.apiURL);
    return this.reviews;
  }

  /**
  * Returns the name pf property DataService.reviews
  *
  * @remarks
  *  This method get the review for name 
  
  * @param name - name of the review 
  * @returns Observable<ServiceResponse>
  *
  * 
  */
  getReview(name: string) {
    this.getReviews();
    return this.reviews.pipe(
      map(serviceResult => serviceResult.results.find(
        review => review.display_title == name)
      ));
  }
}