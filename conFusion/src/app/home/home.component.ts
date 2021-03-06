import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

import { flyInOut, expand } from '../animations/app.animation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  
  dishErrMess: string;
  constructor(private dishservice: DishService,
              private promotionservice: PromotionService,
              private leaderservice: LeaderService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    /*this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leader = this.leaderservice.getFeaturedLeader();*/

    /* DUNG PROMISE */
    // this.dishservice.getFeaturedDish().then(ftDish => this.dish = ftDish);
    // this.promotionservice.getFeaturedPromotion().then(ftPromo => this.promotion = ftPromo);
    // this.leaderservice.getFeaturedLeader().then(ftLeader => this.leader = ftLeader);
  
    /* DUNG OBSERVABLE */
    this.dishservice.getFeaturedDish().subscribe(ftDish => this.dish = ftDish,
      errmess => this.dishErrMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion().subscribe(ftPromo => this.promotion = ftPromo);
    this.leaderservice.getFeaturedLeader().subscribe(ftLeader => this.leader = ftLeader);
  }

}
