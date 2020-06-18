import { Component, OnInit } from '@angular/core';
import { Trade } from '../trade';
import { ActivatedRoute, Router } from '@angular/router';
import { TradeService } from '../trade.service';

@Component({
  selector: 'app-update-trade',
  templateUrl: './update-trade.component.html',
  styleUrls: ['./update-trade.component.css']
})
export class UpdateTradeComponent implements OnInit {

  id: number;
  trade: Trade;

  constructor(private route: ActivatedRoute,private router: Router,
    private tradeService: TradeService) { }



  ngOnInit() {
    this.trade = new Trade();

    this.id = this.route.snapshot.params['id'];
    this.tradeService.getTrade(this.id)
      .subscribe(data => {
        console.log(data)
        this.trade = data;
      }, error => console.log(error));
  }

  updateTrade() {
    this.tradeService.updateTrade(this.id, this.trade)
      .subscribe(data => console.log(data), error => console.log(error));
    this.trade = new Trade();
    this.gotoList();
  }

  onSubmit() {
    this.updateTrade();
  }

  gotoList() {
    this.router.navigate(['/trades']);
  }
}
