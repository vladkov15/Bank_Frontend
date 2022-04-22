import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accounts } from '../models/Accounts';
import { PostAccount } from '../models/PostAccount';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'aplication-json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  postForOperations(str:string): Observable<string>{
    return this.http.post<string>('http://localhost:38889/endpoint5',str);
  }

  getAcc(): Observable<Accounts[]> {
    return this.http.get<Accounts[]>(
      `http://localhost:38889/endpoint3`
    );
  }
  postAcc(account:PostAccount):Observable<PostAccount>{
     return this.http.post<any>(`http://localhost:38889/endpoint4`,this.ToJson(account));
  }
  ToJson(account:PostAccount):string{
    const json: string="{"+
    "\"first_name\": \"" + account.first_name + "\","+
    "\"last_name\": \"" + account.last_name + "\","+
    "\"birthday\": \"" + account.birthday + "\","+
    "\"sex\": \"" + account.sex + "\","+
    "\"account_number\": \"" + account.account_number + "\"}"
    return json;
  }
  
}
