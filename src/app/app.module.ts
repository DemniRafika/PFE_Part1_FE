
/* Angular Material */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { HttpInterceptorService } from './httpInterceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateTradeComponent } from './create-trade/create-trade.component';
import { TradeDetailsComponent } from './trade-details/trade-details.component';
import { TradeListComponent } from './trade-list/trade-list.component';
import { UpdateTradeComponent } from './update-trade/update-trade.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataTablesModule} from 'angular-datatables';
import { ReactiveFormsModule} from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import {MatToolbarModule} from '@angular/material/toolbar'

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './register/register.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatSidenavModule} from  '@angular/material/sidenav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    CreateTradeComponent,
    TradeDetailsComponent,
    TradeListComponent,
    UpdateTradeComponent,
    RegisterComponent,
    UserProfileComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DataTablesModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    NgbModule,


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
