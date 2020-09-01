import { Component, OnInit, Inject } from "@angular/core";

import { Leader } from "../shared/leader";

import { LeaderService } from "../services/leader.service";

import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {
  leaders: Leader[];

  constructor(private leaderservice: LeaderService,
              @Inject('BaseURL') private BaseURL) {}

  ngOnInit() {
    // this.leaders = this.leaderservice.getLeaders();
    this.leaderservice.getLeaders()
    .subscribe((leaders) => (this.leaders = leaders)); // DUNG OBSERVABLE
    // .then((leaders) => (this.leaders = leaders)); // DUNG PROMISE
  }
}
