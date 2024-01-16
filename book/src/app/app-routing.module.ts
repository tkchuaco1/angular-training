import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './authGuard.service';

const routes: Routes = [
  {path: 'customer', canActivate: [AuthGuardService],
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
