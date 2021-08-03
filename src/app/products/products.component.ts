import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
Products=[]
  constructor(private dataservice:DataService) {
    this.dataservice.displayProducts()
    .subscribe((result:any)=>{
      if(result){
        this.Products=result.message
      }
     },
     (result)=>{
alert(result.error.message)
     
    })

   }

  ngOnInit(): void {
    
  }
  
search($event){
 let searchItem= $event.target.value;

}
addToCart(title:any){
  let uID=localStorage.getItem("uID")
  this.dataservice.addToCart(title,uID)
  .subscribe((result:any)=>{
    if(result){
      alert(result.message)
    }
   },
   (result)=>{
alert(result.error.message)
   
  })
}


}
