import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  // getLeaders(): Promise<Leader[]> {
  //   // return Promise.resolve(LEADERS);
  //   // return new Promise(resolve=> {
  //   //   // Simulate server latency with 2 second delay
  //   //     setTimeout(() => resolve(LEADERS), 2000);
  //   // });
  //   return of(LEADERS).pipe(delay(2000)).toPromise();
  // }

  // getLeader(id: string): Promise<Leader> {
  //   // return Promise.resolve(LEADERS.filter((ld) => ld.id === id)[0]);
  //   // return new Promise(resolve=> {
  //   //     setTimeout(() => resolve(LEADERS.filter((ld) => (ld.id === id))[0]), 2000);
  //   // });
  //   return of(LEADERS.filter((ld) => (ld.id === id))[0])
  //                     .pipe(delay(2000)).toPromise();
  // }

  // getFeaturedLeader(): Promise<Leader> {
  //   // return Promise.resolve(LEADERS.filter((ld) => ld.featured)[0]);
  //   // return  new Promise(resolve=> {
  //   //     setTimeout(() => resolve(LEADERS.filter((ld) => ld.featured)[0]), 2000);
  //   // });
  //   return of(LEADERS.filter((ld) => ld.featured)[0])
  //                     .pipe(delay(2000)).toPromise();
  // }

  getLeaders(): Observable<Leader[]> {
    // return of(LEADERS).pipe(delay(2000));
    return this.http.get<Leader[]>(baseURL + 'leadership')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLeader(id: string): Observable<Leader> {
    // return of(LEADERS.filter((ld) => (ld.id === id))[0]).pipe(delay(2000));
    return this.http.get<Leader>(baseURL + 'leadership/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
    // return of(LEADERS.filter((ld) => ld.featured)[0]).pipe(delay(2000));
    return this.http.get<Leader[]>(baseURL + 'leadership?featured=true')
      .pipe(map(ld => ld[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
