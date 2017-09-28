import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MorseService } from '../service/morse-list/list.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  morse: any;
  constructor(private morseService: MorseService) {
  }

  ngOnInit() {
    this.morseService.getJson().subscribe(result => {
       this.morse = result;
    });
  }

  ngAfterViewInit() {
  }

}
