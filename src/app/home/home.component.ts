import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToIndex() {
    this.route.navigate(['/index']);
  }

  goToPage1() {
    this.route.navigate(['/page1']);
  }

  goToPage2() {
    this.route.navigate(['/page2']);
  }
}
