import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ReviewCard } from '../models/review-card.model';
import { DataService } from '../reviews/data.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  detail$: Observable<ReviewCard>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DataService
  ) { }

  ngOnInit() {
    this.detail$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getReview((params.get('name')))
    ));
  }

  gotoReviews() {
    //let heroId = hero ? hero.id : null;
    
    this.router.navigate(['']);
  }

  

}
