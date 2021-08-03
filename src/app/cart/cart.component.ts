import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItems=[]
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    let uID=localStorage.getItem("uID")
    this.dataservice.displayCartItems(uID)
    .subscribe((result:any)=>{
      if(result){
        this.cartItems=result.message
      }
     },
     (result)=>{
alert(result.error.message)
     
    })

  }

}
