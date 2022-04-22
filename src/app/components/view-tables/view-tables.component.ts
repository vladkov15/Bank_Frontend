import { Component, OnInit } from '@angular/core';
import { Accounts } from 'src/app/models/Accounts';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-view-tables',
  templateUrl: './view-tables.component.html',
  styleUrls: ['./view-tables.component.css']
})
export class ViewTablesComponent implements OnInit {
  aki:Accounts[]=[];
   data:any;

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.getAcc().subscribe(ac =>{
      ac.forEach(element => {
          this.aki.push(element);
      });
    })
  }
  /*ngOnInit(): void {
    this.aki = [{
      id: 1,
    first_name: "vlad",
    last_name: "kovalev",
    birthday: "14.08.2001",
    sex: "male",
    account_number: "QQQQRR",
    account_balance: 0.0
    },
     {
      id: 2,
      first_name: "nastya",
      last_name: "smulai",
      birthday: "24.02.2000",
      sex: "female",
      account_number: "XTRWNV",
      account_balance: 0.0
     }
    ]
  }*/
   
}
