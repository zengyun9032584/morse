import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MorseService } from '../service/morse-list/list.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  morse: any;
  inputVal: string;
  constructor(private morseService: MorseService) {
  }

  ngOnInit() {
    this.morseService.getJson().subscribe(result => {
      this.morse = result;
    });
  }

  ngAfterViewInit() {

  }

  getInputVal(): Array<Array<string>> {
    const value: any = this.inputVal.split(' ');
    let words = [];
    const morse = [];
    // tslint:disable-next-line:prefer-const
    for (let str of value) {
      const word = str.trim();
      // tslint:disable-next-line:prefer-const
      for (let letter of word) {
        words.push(this.morse['type' + letter.toUpperCase()]);
      }
      morse.push(words);
      morse.push('');
      words = [];
    }
    morse.pop();
    return morse;
  }

}
