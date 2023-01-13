import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items!:string[]; //sera donde almacenemos los datos recibidos del servicio
  constructor(private data:DataService) { } //private porque sera accesible solo aquí

  ngOnInit(): void {
    this.data.getData().subscribe(data => this.items = data); //llamamos al método getData() y el contenido le pasamos al array Items
  }

  editar(id:number){
    console.log(id);
  }
}
