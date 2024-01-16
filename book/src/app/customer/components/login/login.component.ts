import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICustomer, ILoginRequest } from '../../shared/interface';
import { CustomerService } from '../../shared/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginRequest!: ILoginRequest;


  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private route: Router
  ) {
  }
  ngOnInit(): void {
      this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
  }

  onSubmit() {

    this.loginRequest = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.customerService.getCustomer().subscribe((data:any) => {
        data.find((customer: ICustomer) => {
          if(customer.username == this.loginRequest.username && customer.password == this.loginRequest.password) {
            localStorage.setItem('token',customer.name)
            this.route.navigate(['create'])
          }
        })
    })
  }

}
