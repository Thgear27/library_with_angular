import { Component } from '@angular/core';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.scss']
})

export class LoginBodyComponent {
  optionSelected?: string;

  constructor() {
    this.optionSelected = "login";
  }

  onOptionClick(option: string) {
    this.optionSelected = option; 
  }
}
