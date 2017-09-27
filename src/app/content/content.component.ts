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
  constructor(private morseService: MorseService) {
  }

  ngOnInit() {
    const obser: any = this.morseService.getJson();
    obser.subscribe(result => {
        this.morse = result;
    });
  }

  ngAfterViewInit() {
  }

}
