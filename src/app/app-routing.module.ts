import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TradeListComponent } from './trade-list/trade-list.component';
import { CreateTradeComponent } from './create-trade/create-trade.component';
import { UpdateTradeComponent } from './update-trade/update-trade.component';
import { TradeDetailsComponent } from './trade-details/trade-details.component';

import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {path: '', redirectTo: 'trade', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'trades', component: TradeListComponent },
  {path: 'add', component: CreateTradeComponent },
  {path: 'update/:id', component: UpdateTradeComponent },
  {path: 'details/:id', component: TradeDetailsComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'user-profile', component:  UserProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
