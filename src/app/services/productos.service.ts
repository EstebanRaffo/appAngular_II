import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map, Observable } from 'rxjs';
import { __values } from 'tslib';
import { Producto, ResponseProducto } from '../interfaces/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  getAll():Observable<ResponseProducto>{
    return this.http.get<ResponseProducto>(environment.apiEndpoint+"sites/MLA/search?category=MLA1055")
    // http devuelve un observable que indica que en algún momento se resuelve la llamada
  }
  getAllPromise():Promise<ResponseProducto>{
    // lastValueFrom transforma el observable en un promise y puedo usar async await en el constructor de home
    return lastValueFrom(this.http.get<ResponseProducto>(environment.apiEndpoint+"sites/MLA/search?category=MLA1055"))
  }
  getAllPipe():Observable<Producto[]>{
    // this.http.get("https://api.mercadolibre.com/sites/MLA/search?category=MLA1055") devuelve un observable que pasa a ser 
    // el value y con map solo me devuelve results
    return this.http.get<ResponseProducto>(environment.apiEndpoint+"sites/MLA/search?category=MLA1055").pipe(map((value:ResponseProducto)=>value.results))
  }
  create(data:any){
    return this.http.post("URL", data)
  }
  update(id:string,data:any){
    return this.http.put("URL/"+id, data)
  }
  delete(id:string){
    return this.http.delete("URL/"+id)
  }
  getById(id:string):Observable<Producto>{
    return this.http.get<Producto>(environment.apiEndpoint+"items/"+id)
  }
}
