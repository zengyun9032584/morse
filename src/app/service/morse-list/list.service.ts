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
            this.http.get('http://localhost:8081/list').subscribe((result: any) => {
                observer.next(result.letter);
                observer.complete();
            });
        });
    }
}
