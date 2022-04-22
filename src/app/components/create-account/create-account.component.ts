import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounts } from 'src/app/models/Accounts';
import { PostAccount } from 'src/app/models/PostAccount';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
   account:PostAccount={
    first_name:" ",
    last_name: " ",
    birthday:" ",
    sex: " ",
    account_number:""
   }


  constructor(private route:Router,private accountService:AccountService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.account.first_name);
    console.log(this.account.last_name);
    console.log(this.account.birthday);
    console.log(this.account.sex);
    console.log(this.account.account_number);
    this.accountService.postAcc(this.account).subscribe(account =>{
      console.log(account);
      this.route.navigateByUrl('/tables');
    });
  }
  OnToggle(){
    this.account.account_number=this.generatePassword(6);
  
  }
    generatePassword(passwordLength:number) {
    let numberChars = "0123456789";
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let allChars = numberChars + upperChars + lowerChars;
    var randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray = randPasswordArray.fill(allChars, 3);
    return this.shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  }
  
   shuffleArray(array:any) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }  

}
