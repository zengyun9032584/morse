import {Component, OnInit} from '@angular/core';
import {MorseService} from '../service/morse-list/list.service';
import {TreeNode} from 'primeng/primeng';

@Component({selector: 'app-content', templateUrl: './content.component.html', styleUrls: ['./content.component.css']})
export class ContentComponent implements OnInit {
  morse: any; // 返回morse编码的json数据
  inputVal: string; // 绑定输入框的值
  data: TreeNode[]; // 以流程图展示morse内容的json数据
  constructor(private morseService: MorseService) {}

  ngOnInit() {
    this
      .morseService
      .getJson()
      .subscribe(result => {
        this.morse = result;
      });
  }

  /**
   *
   * 清楚input内容
   * @memberof ContentComponent
   */
  clearInputCon() {
    this.inputVal = '';
    this.data = [];
  }

  /**
   *
   *
   * @returns {Array<Array<string>>} => 以数组返回转化后摩尔斯内容
   * @memberof ContentComponent
   */
  getInputVal(): Array < Array < string >> {
    const treeNodeRoot = {
      label: '',
      expanded: true,
      children: []
    }; // 临时存放流程图json数据
    treeNodeRoot.label = this.inputVal;
    const value: any = this
      .inputVal
      .split(' ');
    const morseArr = []; // 存放input框内容的morse内容
    // tslint:disable-next-line:prefer-const
    for (let str of value) {
      const treeNode1 = {
        label: '',
        expanded: true,
        children: []
      };
      const words = []; // 存放一个单词的morse密码
      // 去掉左右之间的空格
      const word = str.trim();
      treeNode1.label = word;
      const treeNode2 = {
        label: '',
        expanded: true,
        type: 'content'
      };
      treeNode2.label = '';
      // tslint:disable-next-line:prefer-const
      for (let letter of word) {
        // 如果是字母则匹配morse内容
        if (this.checkInputCon(letter)) {
          treeNode2.label += this
            .morse['type' + letter.toUpperCase()]
            .map(this.tranformDotCon)
            .join('') + '\t';
          words.push(this.morse['type' + letter.toUpperCase()]);
        }
      }
      treeNode1
        .children
        .push(treeNode2);
      treeNodeRoot
        .children
        .push(treeNode1);
      morseArr.push(...words);
      morseArr.push('');
    }
    // 删除最后面的空格占位
    morseArr.pop();
    this.clearData();
    this
      .data
      .push(treeNodeRoot);
    return morseArr;
  }

  /**
   *
   * 判断传入的参数第一个字符是否是字母
   * @param {string} letter => 需要判断的内容
   * @memberof ContentComponent
   */
  checkInputCon(letter: string) {
    const reg = new RegExp(/^[a-zA-Z]/);
    return reg.test(letter);
  }

  /**
   *
   * 清空data变量
   * @memberof ContentComponent
   */
  clearData() {
    this.data = [];
  }


  /**
   *
   * 将字符串转换成morse中的点或横线
   * @param {string} str => 需要转换的字符串
   * @returns {string} 返回转换后的内容
   * @memberof ContentComponent
   */
  tranformDotCon(str: string): string {
    if (str === 'tre') {
      return '—';
    } else {
      return '·';
    }
  }
}
