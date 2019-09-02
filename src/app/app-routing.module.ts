import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';


const routes: Routes = [
  {path:'', component: ReviewsComponent},
  {path:'detail/:name', component: ReviewDetailComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
