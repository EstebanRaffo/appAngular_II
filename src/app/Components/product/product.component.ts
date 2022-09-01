import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/Productos';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  data!:Producto
  @Output()
  reload = new EventEmitter
  constructor() { }
  eliminar(){
    // Eliminar en BD mediante un servicio
    console.log("eliminar")
    this.reload.emit()
  }
  ngOnInit(): void {
  
  }

}
