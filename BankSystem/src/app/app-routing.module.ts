import { ConfigComponent } from './pages/config/config.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ManagerClientsComponent } from './pages/manager-clients/manager-clients.component';
import { NewClientComponent } from './pages/new-client/new-client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'addClient', component: NewClientComponent},
  {path: 'ManagerClients', component: ManagerClientsComponent},
  {path: 'Reports', component: ReportsComponent},
  {path: 'Config', component: ConfigComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
