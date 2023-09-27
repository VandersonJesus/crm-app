import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerService } from 'src/app/data/services/customer.service';

@NgModule({
  imports: [WelcomeRoutingModule, SharedModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent, SharedModule],
})
export class WelcomeModule {
  public title: string = 'Welcome';
  public subTitle: string =
    'The best app to register incomes, expenses and investments';
}
