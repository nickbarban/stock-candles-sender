import {Injectable} from '@angular/core';
import {Stock} from "./stock";
import {STOCKS} from "./mock-stocks";

@Injectable()
export class StockService {

  getStocks(): Stock[] {
    return STOCKS;
  }

  constructor() {
  }

}
