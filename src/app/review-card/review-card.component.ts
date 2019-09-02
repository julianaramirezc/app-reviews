import { Component, OnInit, Input } from '@angular/core';
import { ReviewCard } from '../models/review-card.model';
import { ReviewMultimedia } from '../models/multimedia.model';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {

  constructor() { }
  @Input() reviewCard : ReviewCard;
  @Input() reviewMultimedia : ReviewMultimedia;

  ngOnInit() {
  }

}
