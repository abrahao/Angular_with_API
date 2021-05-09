import { Injectable } from '@angular/core';
import { tap } from "rxjs/operators";
// Importar o modulo HtttpClient
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // link para a API
  readonly apiUrl = "http://localhost:3000/produtos";

  // Instanciar a classe HttpClient
  constructor( private http: HttpClient ) { }

// Add os métodos a serem utilizados para as ações na API
// Read lê os dados providos da API
  readDBApi(){
  return this.http.get<Produto[]>(this.apiUrl)
  // Debugar
  .pipe(
    tap(console.log)
  )
  ;
  }
}

