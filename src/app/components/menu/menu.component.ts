import { Component, OnInit } from '@angular/core';
import { Money } from 'src/app/models/Money';
import { MoneyService } from 'src/app/services/money.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  babosiki:Money[]=[];


  constructor(private moneyService:MoneyService) { }

  ngOnInit(): void {
    this.moneyService.getMoney().subscribe(money =>{
      money.forEach(element => {
        if(element.Cur_ID==431 || element.Cur_ID==451 || element.Cur_ID==456){
          this.babosiki.push(element);
        }
      });
    })
  }

}
