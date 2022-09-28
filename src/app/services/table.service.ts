import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TableService {



  url=environment.chihebApi;

  constructor(private http:HttpClient) 
  {

   }
   getrolls()
   {
    return this.http.get(`${this.url}:8080/AllClients`);
   }
   deleteClient(clientId:number)
   {
    return this.http.delete(`${this.url}:8080/deleteClient/${clientId}`);
   }
   addClient(client:any)
   {
    return this.http.post(`${this.url}:8080/addclient`,client);
   }
}
