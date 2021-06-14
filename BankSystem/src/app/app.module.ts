import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms'
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { CookieService } from 'ngx-cookie-service';

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
import { ManagerBankAccountComponent } from './pages/manager-bank-account/manager-bank-account.component';
import { NewBankAccountFormComponent } from './components/new-bank-account-form/new-bank-account-form.component';
import { CashierWithdrawalComponent } from './pages/cashier-withdrawal/cashier-withdrawal.component';
import { CashierSearchClientComponent } from './components/cashier-search-client/cashier-search-client.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';

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
    ManagerClientListComponent,
    ManagerBankAccountComponent,
    NewBankAccountFormComponent,
    CashierWithdrawalComponent,
    CashierSearchClientComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'This field is required',
          minlength: ({ requiredLength, actualLength }) => 
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    })
    

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
