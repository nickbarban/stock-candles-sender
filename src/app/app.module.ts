import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {CandlesComponent} from './candles/candles.component';
import {UsersComponent} from './users/users.component';
import {StockDetailsComponent} from './stock-details/stock-details.component';
import {StockService} from "./stock.service";
import {MessageService} from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CandlesComponent,
    UsersComponent,
    StockDetailsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StockService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
