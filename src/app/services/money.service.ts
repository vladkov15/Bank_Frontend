import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Money } from '../models/Money';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'aplication-json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  constructor(private http: HttpClient) { }
  getMoney(): Observable<Money[]> {
    return this.http.get<Money[]>(
      `https://www.nbrb.by/api/exrates/rates?periodicity=0`
    );
  }
}
