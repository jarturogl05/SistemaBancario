import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  public get(url:string){
    return this.http.get(url);
  }

  public getByid(url:string, param:string){
    return this.http.get(url + param);
  }
}