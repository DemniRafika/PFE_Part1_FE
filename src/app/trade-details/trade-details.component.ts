import { Component, OnInit } from '@angular/core';
import { Trade } from '../trade';
import { ActivatedRoute, Router } from '@angular/router';
import { TradeService } from '../trade.service';

@Component({
  selector: 'app-trade-details',
  templateUrl: './trade-details.component.html',
  styleUrls: ['./trade-details.component.css']
})
export class TradeDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['trades']);
  }
}
