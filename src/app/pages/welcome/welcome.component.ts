import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/data/services/customer.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  public title: string = 'Welcome to CRM';
  public subTitle: string =
    'App to register all earnings, expenses and investments';

  constructor(private customerService: CustomerService) {}

  ngOnInit() {}

  buttonClicked() {
    this.customerService.createCustomer({
      email: 'vandersonmj@icloud.com',
      password: '12QWaszx#',
      firstName: 'Vanderson',
      lastName: 'Jesus',
      fullName: 'Vanderson Menezes de Jesus',
    });
  }
}
