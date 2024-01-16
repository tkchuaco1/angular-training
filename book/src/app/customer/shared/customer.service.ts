import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ICustomer, ILoginRequest } from '../shared/interface';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomerService {
    constructor(private http: HttpClient) { }
    getCustomer(): Observable<ICustomer> {
      return this.http.get<ICustomer>(`http://localhost:3000/customer`);
    }
}
