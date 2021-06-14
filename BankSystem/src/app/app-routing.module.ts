import { CashierGuardGuard } from './guards/cashier-guard.guard';
import { ClientHomeComponent } from './pages/client-home/client-home.component';
import { CashierHomeComponent } from './pages/cashier-home/cashier-home.component';
import { UserGuardGuard } from './guards/user-guard.guard';
import { ManagerHomeComponent } from './pages/manager-home/manager-home.component';
import { LoginComponent } from './pages/login/login.component';
import { CashierWithdrawalComponent } from './pages/cashier-withdrawal/cashier-withdrawal.component';
import { ManagerBankAccountComponent } from './pages/manager-bank-account/manager-bank-account.component';
import { ConfigComponent } from './pages/config/config.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ManagerClientsComponent } from './pages/manager-clients/manager-clients.component';
import { NewClientComponent } from './pages/new-client/new-client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { ClientGuardGuard } from './guards/client-guard.guard';


const routes: Routes = [
  {path: 'admin', component: ManagerHomeComponent, children:[
    {path: 'ManagerClients', component: ManagerClientsComponent},
    {path: 'AddBankaccount', component: ManagerBankAccountComponent},
    {path: 'addClient', component: NewClientComponent},
    {path: 'Reports', component: ReportsComponent},
    {path: 'Config', component: ConfigComponent}
  ], canActivate:[AdminGuardGuard]},
  
  {path: 'cashier', component: CashierHomeComponent, children:[
    {path: 'Withdrawal', component: CashierWithdrawalComponent},

  ], canActivate:[CashierGuardGuard]},

  {path: 'client', component:ClientHomeComponent, canActivate:[ClientGuardGuard]},

  
  {path: 'login', component: LoginComponent, canActivate:[UserGuardGuard]},
  {path: '', redirectTo: '/login', pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
