import { TradeService } from '../trade.service';
import { Trade } from '../trade';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-trade',
  templateUrl: './create-trade.component.html',
  styleUrls: ['./create-trade.component.css']
})
export class CreateTradeComponent implements OnInit {

  trade: Trade = new Trade();
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private tradeService: TradeService) { }
  ngOnInit() {
  }

  newTrade(): void {
    this.submitted = false;
    this.trade = new Trade();
  }

  save() {
    this.tradeService.createTrade(this.trade)
      .subscribe(data => console.log(data), error => console.log(error));
    this.trade = new Trade();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/trades']);
  }
}

