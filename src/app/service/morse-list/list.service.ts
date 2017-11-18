import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class MorseService {
    constructor(private http: HttpClient) {
    }


    getJson(): Observable<any> {
        // 使用Observable返回给组件调用者
        return new Observable<any>(observer => {
            // const url = 'https://www.lianyijinxiu.xin:8081/list';
            const url = 'http://localhost:8081/list';
            this.http.get(url).subscribe((result: any) => {
                observer.next(result.letter);
                observer.complete();
            });
        });
    }
}
