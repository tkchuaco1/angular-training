import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../authGuard.service';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {path: '',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'create', component: CreateComponent, canDeactivate: [AuthGuardService] }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
