import { Injectable } from "@angular/core";
import { HttpClient  } from "@angular/common/http";
import { ServiceResponse } from '../models/service.model';

import {  throwError, Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';
import { filter, map, switchMap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class DataService {
    private apiURL: any;

    private reviews : Observable<ServiceResponse>;

    constructor (private http: HttpClient) { 
      this.apiURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu';
    }

    getReviews(){
        if(!this.reviews) this.reviews = this.http.get<ServiceResponse>(this.apiURL);
        return this.reviews;
    }

    getReview(name : string){
      this.getReviews();
      return this.reviews.pipe(
          map(serviceResult => serviceResult.results.find(
              review => review.display_title == name)
              ));
    }
}