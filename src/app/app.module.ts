import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {CandlesComponent} from './candles/candles.component';
import {UsersComponent} from './users/users.component';
import {StockDetailsComponent} from './stock-details/stock-details.component';
import {StockService} from "./stock.service";
import {MessageService} from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    CandlesComponent,
    UsersComponent,
    StockDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StockService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
