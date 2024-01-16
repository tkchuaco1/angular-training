import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';
import { CustomerRoutingModule } from './customer-routing.module';
import {RouterModule, Routes} from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class CustomerModule { }
