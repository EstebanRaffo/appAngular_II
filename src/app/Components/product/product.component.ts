import { AuthService } from 'src/app/services/auth.service';
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
  isLogin = false

  constructor(private authService: AuthService) {
    this.authService.isLogin().subscribe(value=>{
      this.isLogin = value
    })
  }

  eliminar(){
    // Eliminar en BD mediante un servicio
    console.log("eliminar")
    this.reload.emit()
  }

  ngOnInit(): void {
  
  }

}
