import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password : string;
  includeLetters : boolean = false;
  includeNumbers : boolean = false;
  includeSymbols : boolean = false;
  length : number = 0 ;

  constructor(){
    this.password='';

  }
  onButtonCick(){
    //this.password = 'Your Password!';
    const numbers = '1234567890';
    const letters = 'zxcvbnmasdfghjklqwertyuiop';
    const symbols = '!@#$%^&*()';
    let validChar = '';
    if (this.includeNumbers){
      validChar+=numbers;
    }
    if (this.includeLetters){
      validChar += letters;
    }
    if (this.includeSymbols){
      validChar += symbols;
    }
    let generatePassword = '';
    for(let index=0 ; index < this.length ; index ++){
      let index = Math.floor(Math.random()*validChar.length)
      generatePassword += validChar[index];
    }
    this.password = generatePassword;
  }
  getPassword() { 
    return this.password;
  }
  onChangeLetters(){
    this.includeLetters = !this.includeLetters ;
  }
  onChangeNumbers(){
    this.includeNumbers = !this.includeNumbers ;
  }
  onChangeSymbols(){
    this.includeSymbols = !this.includeSymbols ;
  }
  onChange(value : string){
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length=parsedValue;
    }
  }
}

