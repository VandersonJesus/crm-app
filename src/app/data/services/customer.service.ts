import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpErrorHandler } from 'src/app/shared/services/http-error-handler.service';
import { Customer } from '../models/customer';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private url: string = `${environment.apiUrl}/api/v1/customers`;

  constructor(private http: HttpClient, private eh: HttpErrorHandler) {}

  createCustomer(customer: Customer) {
    return this.http
      .post<Customer>(this.url, {
        email: customer.email,
        password: customer.password,
        firstName: customer.firstName,
        lastName: customer.lastName,
      })
      .pipe(catchError(this.eh.handleError));
  }
}
