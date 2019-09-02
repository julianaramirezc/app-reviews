import { Component, OnInit } from '@angular/core';
import { ServiceResponse } from '../models/service.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})

export class ReviewsComponent implements OnInit {
  public response: ServiceResponse;
  
  constructor(private dataService: DataService) { }

   /**
  * 
  *
  * @remarks
  *  This method get the data of the method getReviews()
  
  *
  *
  * 
  */
  ngOnInit() {
    let reviewResult = this.dataService.getReviews().subscribe(data => 
      {
        if(data)
          this.response = data;
      });
  }

}
