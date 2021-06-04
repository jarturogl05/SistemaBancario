import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerHomeComponent } from './pages/manager-home/manager-home.component';
import { ManagerSidebarComponent } from './components/manager-sidebar/manager-sidebar.component';
import { CashierSidebarComponent } from './components/cashier-sidebar/cashier-sidebar.component';
import { CashierHomeComponent } from './pages/cashier-home/cashier-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerHomeComponent,
    ManagerSidebarComponent,
    CashierSidebarComponent,
    CashierHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
