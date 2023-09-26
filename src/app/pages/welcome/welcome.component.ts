import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public title:string = "Welcome to CRM"
  public subTitle:string ="App to register all earnings, expenses and investments"

  constructor() { }

  ngOnInit() {
  }

}
