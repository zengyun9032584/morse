import { Component, OnInit } from '@angular/core';
import { MorseService } from '../service/morse-list/list.service';
import { TreeNode } from 'primeng/primeng';
import NProgress from 'nprogress';

@Component({ selector: 'app-content', templateUrl: './content.component.html', styleUrls: ['./content.component.css'] })
export class ContentComponent implements OnInit {
  morse: any; // 返回morse编码的json数据
  inputVal = ''; // 绑定输入框的值
  data: TreeNode[] = []; // 以流程图展示morse内容的json数据
  status = false;    // 提示信息的开关，默认不显示提示信息
  constructor(private morseService: MorseService) { }

  ngOnInit() {
    this.morseService.getJsonByAsync().then((result: any) => {
      this.morse = result.letter;
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
    this.status = false;
  }

  /**
   *
   *
   * @returns
   * @memberof ContentComponent
   */
  generatePwd() {
    // 清空上一次数据
    this.clearData();
    // 提交后判断输入框是否有内容，没有则给出提示信息，1200ms后消失
    if (this.inputVal.length === 0) {
      this.status = true;
      setTimeout(() => {
        this.status = false;
      }, 1200);
      return;
    }
    NProgress.start();
    this.data.push(this.generateTreeNode());
    NProgress.done();
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

  /**
   *
   * 根据用户输入的值生成摩尔斯树结构
   * @returns {TreeNode}
   * @memberof ContentComponent
   */
  generateTreeNode(): TreeNode {
    // 临时存放流程图json数据
    const treeNodeRoot: TreeNode = {
      label: '摩尔斯码',
      expanded: true,
      children: []
    };
    // 使用正则获取所有单词
    const value: String[] = this.inputVal.match(/\b([a-zA-Z]+)/g);
    for (const str of value) {
      const treeNode1: TreeNode = {
        label: '',
        expanded: true,
        children: []
      };
      const words = []; // 存放一个单词的morse密码
      // 去掉左右之间的空格
      const word = str.trim();
      treeNode1.label = word;
      const treeNode2: TreeNode = {
        label: '',
        expanded: true,
        type: 'content'
      };
      treeNode2.label = '';
      // tslint:disable-next-line:prefer-const
      for (let letter of word) {
          treeNode2.label += this
            .morse['type' + letter.toUpperCase()]
            .map(this.tranformDotCon)
            .join('') + '\t';
          words.push(this.morse['type' + letter.toUpperCase()]);
      }
      // 将内容放入根节点
      treeNode1.children.push(treeNode2);
      treeNodeRoot.children.push(treeNode1);
    }
    return treeNodeRoot;
  }
}
