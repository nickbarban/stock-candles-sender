import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CandlesComponent} from "./candles/candles.component";

const routes: Routes = [
  {path: 'stocks', component: CandlesComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {


}
