
import { Observable } from "rxjs";
import { TradeService } from "./../trade.service";
import { Trade } from "./../trade";

import { Router , ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../login/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { StyleCompiler } from '@angular/compiler';
import { style } from '@angular/animations';
//import * as $ from 'jquery';

declare var $: any 

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {
  

  trades: Observable<Trade[]>;

  isLoggedIn = false;

  isChecked = false;

  tradeTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;
  
  trade: Trade = new Trade();
  submitted = false;


  constructor(private tradeService: TradeService, private route: ActivatedRoute,
    private router: Router , private authenticationService: AuthenticationService ,private fb: FormBuilder) {}

  ngOnInit() : void {
    this.reloadData();
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);

    this.touchedRows = [];
    this.tradeTable = this.fb.group({
      tableRows: this.fb.array([])
    });
 //Toggle Click Function
 $("#toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});


//modal
$(document).on( 'click', '.ok', function () {
  $("#myModal").modal('show');

 } );
  }

  initiateForm(): FormGroup {
    return this.fb.group({
      firm: [this.trade.firm, Validators.required],
      date: [this.trade.date, [Validators.required]],
      product: [this.trade.product, [Validators.required]],
      contract: [this.trade.contract, [Validators.required]],
      bs: [this.trade.bs, [Validators.required]],
      qty: [this.trade.qty, [Validators.required, Validators.maxLength(10)]],
      price: [this.trade.price, [Validators.required, Validators.maxLength(10)]],
      account: [this.trade.account, [Validators.required]],
      order: [this.trade.order, [Validators.required]],
      org: [this.trade.org, [Validators.required]],
      cti: [this.trade.cti, [Validators.required]],
      tradedAs: [this.trade.tradedAs, [Validators.required]],
      orderType: [this.trade.orderType, [Validators.required]],
      bkr: [this.trade.bkr, [Validators.required]],
      oppFirm: [this.trade.oppFirm, [Validators.required]],
      oppBrkr: [this.trade.oppBrkr, [Validators.required]],
      timeBrkt: [this.trade.timeBrkt, [Validators.required]]
     
    });
  }
 
  addRow(nb=1) {
    while ((this.tradeTable.get('tableRows') as FormArray).length !== 0) {
      (this.tradeTable.get('tableRows') as FormArray).removeAt(0)
    } 
   for (let i=0; i< nb ; i++){
    const control =  this.tradeTable.get('tableRows') as FormArray;
    control.push(this.initiateForm());
   }
  }
  ngAfterOnInit() {
    this.control = this.tradeTable.get('tableRows') as FormArray;
  }

  editRow(group: FormGroup) {
    group.get('isEditable').setValue(true);
  }

  doneRow(group: FormGroup) {
    group.get('isEditable').setValue(false);
  }

  saveTradeDetails() {
    console.log(this.tradeTable.value);
  }

  get getFormControls() {
    const control = this.tradeTable.get('tableRows') as FormArray;
    return control;
  }

  save(trades) {
    this.tradeService.createTrade(trades)
      .subscribe(data => console.log(data), error => console.log(error));
    this.trade = new Trade();
  }
  /*submitForm() {
    const control = this.tradeTable.get('tableRows') as FormArray;
    this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
    console.log(this.touchedRows);
  }*/
  onFormSubmit(): void {
    for (let i = 0; i < (this.tradeTable.get('tableRows') as FormArray).length; i++) {
      console.log( (this.tradeTable.get('tableRows') as FormArray).at(i).value);
      this.submitted = true; 
      this.save((this.tradeTable.get('tableRows') as FormArray).at(i).value);
    }
  }


  checkuncheckall()
  {

    if(this.isChecked == true)
  { 
    this.isChecked = false;

  }
  else
  {
  this.isChecked = true;
  for (let i = 0; i < (this.tradeTable.get('tableRows') as FormArray).length; i++) {
    (this.tradeTable.get('tableRows') as FormArray).at(i).patchValue((this.tradeTable.get('tableRows') as FormArray).at(0).value);
  }
  }
  }


  handleLogout() {
    this.authenticationService.logout();
  }

  reloadData() {
    this.trades = this.tradeService.getTradesList();
  }

  deleteTrade(id: number) {
    this.tradeService.deleteTrade(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  tradeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateTrade(id: number){
    this.router.navigate(['update', id]);
  }

 

}
