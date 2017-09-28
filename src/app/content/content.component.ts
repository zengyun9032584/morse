import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MorseService } from '../service/morse-list/list.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  list = [];
  result = false;
  morse: any;
  obser: any;
  constructor(private morseService: MorseService) {
  }

  ngOnInit() {
    this.obser = this.morseService.getObser();
    this.morseService.getJson();
    this.obser.subscribe(result => {
      debugger;
      this.morse = result;
    });
  }

  ngAfterViewInit() {
  }

}
