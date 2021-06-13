import { LoginComponent } from './pages/login/login.component';
import { CashierWithdrawalComponent } from './pages/cashier-withdrawal/cashier-withdrawal.component';
import { ManagerBankAccountComponent } from './pages/manager-bank-account/manager-bank-account.component';
import { ConfigComponent } from './pages/config/config.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ManagerClientsComponent } from './pages/manager-clients/manager-clients.component';
import { NewClientComponent } from './pages/new-client/new-client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'addClient', component: NewClientComponent},
  {path: 'ManagerClients', component: ManagerClientsComponent},
  {path: 'AddBankaccount', component: ManagerBankAccountComponent},
  {path: 'Reports', component: ReportsComponent},
  {path: 'Config', component: ConfigComponent},
  {path: 'Withdrawal', component: CashierWithdrawalComponent},
  {path: 'login', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
