import {Injectable} from '@angular/core';
import {Stock} from "./stock";
import {STOCKS} from "./mock-stocks";
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from "./message.service";

@Injectable()
export class StockService {

  getStocks(): Observable<Stock[]> {
    this.messageService.add('StockService: fetched stocks')
    return of(STOCKS);
  }

  constructor(private messageService: MessageService) {
  }


}
