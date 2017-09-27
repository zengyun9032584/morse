import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscriber, Subscription } from 'rxjs/Rx';

@Injectable()
export class MorseService {
    constructor(private http: HttpClient) {
    }

    getJson() {
        let obse: any;
        const obser = Observable.create(observe => {
            obse = observe;
        });
        this.http.get('http://localhost:8081/list').subscribe((result: any) => {
            obse.next(result.passwd);
        });
        return obser;
    }
}
