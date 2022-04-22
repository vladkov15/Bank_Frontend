import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-change-balance',
  templateUrl: './change-balance.component.html',
  styleUrls: ['./change-balance.component.css']
})
export class ChangeBalanceComponent implements OnInit {
  up:boolean=true;
  amount:number = 0;
  account_number:string="";

  constructor(private accountServive:AccountService,private route:Router) { }

  ngOnInit(): void {
  }
  OnToggle(){
    this.up=!this.up;
   console.log(this.up);
  }
 
  onSubmit(){
    console.log(this.up,this.amount,this.account_number);
    this.accountServive.postForOperations(this.ToJson()).subscribe(str =>{
      console.log(str);
    });
    this.route.navigateByUrl("/tables");
  }
  ToJson():string{
    const json: string="{"+
    "\"operation\": " + this.up + ","+
    "\"account_number\": \"" + this.account_number + "\","+
    "\"amount\": " + this.amount + "}"
    return json;
  }

}
