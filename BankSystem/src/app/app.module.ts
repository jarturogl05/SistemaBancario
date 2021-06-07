import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerHomeComponent } from './pages/manager-home/manager-home.component';
import { CashierHomeComponent } from './pages/cashier-home/cashier-home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewClientComponent } from './pages/new-client/new-client.component';
import { HomeComponent } from './pages/home/home.component';
import { ManagerClientsComponent } from './pages/manager-clients/manager-clients.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ConfigComponent } from './pages/config/config.component';
import { SearchClientComponent } from './components/search-client/search-client.component';
import { NewClientFormComponent } from './components/new-client-form/new-client-form.component';
import { ManagerClientListComponent } from './components/manager-client-list/manager-client-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerHomeComponent,
    CashierHomeComponent,
    SidebarComponent,
    NewClientComponent,
    HomeComponent,
    ManagerClientsComponent,
    ReportsComponent,
    ConfigComponent,
    SearchClientComponent,
    NewClientFormComponent,
    ManagerClientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
