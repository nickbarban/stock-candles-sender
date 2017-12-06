import {Component, OnInit} from '@angular/core';
import {StockService} from "../stock.service";
import {Stock} from "../stock";


@Component({
  selector: 'app-candles',
  templateUrl: './candles.component.html',
  styleUrls: ['./candles.component.css']
})
export class CandlesComponent implements OnInit {

  stocks: Stock[];

  constructor(private stockService: StockService) {
  }

  ngOnInit() {
    this.getStocks();
  }

  selectedStock: Stock;

  onSelect(stock: Stock): void {
    this.selectedStock = stock;
  }

  getStocks(): void {
    this.stockService.getStocks().subscribe(stocks => this.stocks = stocks);
  }
}
