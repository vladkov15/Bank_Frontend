import { Component, Input, OnInit } from '@angular/core';
import { Accounts } from 'src/app/models/Accounts';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnInit {
  @Input()
  Account : Accounts={
    id: 0,
    first_name: " ",
    last_name: " ",
    birthday: " ",
    sex: " ",
    account_number: " ",
    account_balance: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
