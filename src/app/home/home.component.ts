import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../data.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  produtos: Produto[];

  // Injetar o service no construtor
  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.readDBApi()
    .subscribe(dados => this.produtos = dados);
  }

  // listar(){
    
  // }

}
