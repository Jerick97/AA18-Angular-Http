import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI = "https://jsonplaceholder.typicode.com/todos"; //url de nuestra API

  constructor(private http:HttpClient) { } //Importamos HttpClient

  //Método que retorna la solicitud GET al API
  getData():Observable<string[]>{
    return this.http.get<string[]>(this.urlAPI);
  }
}
