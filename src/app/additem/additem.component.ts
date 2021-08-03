import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private dataservice:DataService) { }

  ngOnInit(): void {
  }
  addform=this.fb.group({
    title:['',Validators.required],
    subTitle:['',Validators.required],
    description:['',Validators.required],
  })
  addItem(){

    if(this.addform.valid){
      let title=this.addform.value.title;
      let subTitle=this.addform.value.subTitle;
      let description=this.addform.value.description;
      this.dataservice.addItem(title,subTitle,description)
      .subscribe((result:any)=>{
        if(result){
          
          alert(result.message);
         
       
        }
      },
      (result)=>{
        alert(result.error.message);
        
      
      })
     }
     else{
       alert("Invalid form")
     }
    
  }
 
}
