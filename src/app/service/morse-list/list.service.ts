import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscriber, Subscription } from 'rxjs/Rx';

@Injectable()
export class MorseService {
    obser: any;    // 定义obser异步返回给组件
    observe: any;
    constructor(private http: HttpClient) {
        this.createObservable();
    }

    createObservable() {
        // 创建一个观察者对象并赋值给obser变量存放
        this.obser = Observable.create(observe => {
            // debugger;
            this.observe = observe;
        });
    }

    getObser() {
        // 返回观察者
        return this.obser;
    }

    getJson() {
        this.http.get('http://localhost:8081/list').subscribe((result: any) => {
            this.observe.next(result.passwd);
        });
    }
}
