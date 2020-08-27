import { Component, OnInit, Inject } from "@angular/core";

import { Dish } from "../shared/dish";
// import { DISHES } from '../shared/dishes';

import { DishService } from '../services/dish.service';

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  // Cả hai cách đều được
  // dishes: Dish[] = DISHED;
  // dishes = DISHES;
  // Nhưng lấy DISHES về trực tiếp ko phải là ideal way -> Use service to get data
  dishes: Dish[];
  selectedDish: Dish;

  errMess: string;

  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) {}

  ngOnInit() {
    // Cách cũ trc khi xài Promise
    // this.dishes = this.dishService.getDishes();
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes,
        errmess => this.errMess = <any>errmess); // Dung Observable
      // .then(dishes => this.dishes = dishes); // Dung Promise

  }

  // onSelect(dish: Dish) {
  //   this.selectedDish = dish;
  // }
}
