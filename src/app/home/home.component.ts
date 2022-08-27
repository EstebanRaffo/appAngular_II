import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
// El servicio es inyectable para que los compnentes lo puedan inyectar en su constructor y asi acceder a los metodos de ese
// servicio
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos:any = [] // any es el tipo: puede ser cualquier cosa
  productosAsync:any = []
  productosObs:any = []
  loading: boolean = true
  cantidad: number = 0
  titulo:string=""
  categorias:string[]=[]
  constructor(private productosServices: ProductosService) {
    // para ver el observable hasta que resuelva la llamada debe suscribirse, similar al .then de las promesas en JS
    const title:string=""
    // this.productosServices.getAll().subscribe({
    //   next:(data:any)=>{
    //     console.log(data)
    //     this.productos = data.results
    //     this.loading = false
    //   },
    //   error:error=>{
    //     console.log(error)
    //   }
    // })
    
    this.productosObs = this.productosServices.getAllPipe()
    console.log(this.productosObs)
    // this.init()
  }
  // async init(){
  //   try {
  //     const response:any = await this.productosServices.getAllPromise()
  //     this.productosAsync = response["results"]
  //   } catch (error) {
      
  //   }
  // }

  ngOnInit(): void {
  }

}
