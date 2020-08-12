import { Component, OnInit } from "@angular/core";

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

  constructor(private dishService: DishService) {}

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
