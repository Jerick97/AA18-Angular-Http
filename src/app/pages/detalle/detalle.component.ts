import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id!:number; //almacenara el id recibido por la url
  public itemDetalle : any = {}; //almacena el detalle del elemento por su id
  constructor(private route:ActivatedRoute, private data:DataService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')); //Obtenemos el ID de la url
    this.data.getItem(this.id).subscribe((data) => {this.itemDetalle = data});//Le pasamos el id al método de nuestro servicio
  }
}
