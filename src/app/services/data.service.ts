import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
    options={
      withCredentials: true
    }
  constructor(private http:HttpClient) { }
  signUp(uID:any,userName:any,password:any){
    const data={
      uID:uID,
      username:userName,
      password:password
    }
    
    return this.http.post('http://localhost:3000/register',data,this.options)

  }
  login(uID:any,password:any){
    const data={
      uID:uID,
      password:password
    }
    return this.http.post('http://localhost:3000/login',data)
      }
      addItem(title:any,subTitle:any,description:any){
        const data={
          title:title,
          subTitle:subTitle,
          description:description
        }
        return this.http.post('http://localhost:3000/addItem',data,this.options)
          }
          
          displayProducts(){
           return this.http.post('http://localhost:3000/displayProducts',this.options)
              }

              addToCart(title:any,uID:any){
                const data={
                  title:title,
                 uID:uID
                }
                return this.http.post('http://localhost:3000/addToCart',data,this.options)

              }
              displayCartItems(uID:any){
                const data={
                 uID:uID
                }
                return this.http.post('http://localhost:3000/displayCartItems',data,this.options)
                   }
}
