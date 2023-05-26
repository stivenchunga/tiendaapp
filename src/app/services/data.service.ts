import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class DataService {

   url: string = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  listaUsuarios(){
    return this.http.get(this.url);
  }

  crearUsuario(a: any){
    return this.http.post(this.url+'usuarios', a);
  }

  loginUsuario(a: any){
    return this.http.get(this.url+'usuarios/email/'+a);
  }

  crearCategoria(a: any){
    return this.http.post(this.url+'categorias', a);
  }

  getCategorias(){
    return this.http.get(this.url+'categorias');
  }

  crearProducto(a: any){
    return this.http.post(this.url+'productos', a);
  }

  getProducto(){
    return this.http.get(this.url+'productos');
  }

  //facturas 
  crearFacturas(a: any){
    console.log(a);
    
    return this.http.post(this.url+'facturas', a);
  }    
  getFaturas(){
    return this.http.get(this.url+'facturas');
  }  

  getFaturasById(a: any){
    return this.http.get(this.url+'facturas/'+a);
  } 

  putFaturas(a:any, b:any){
    return this.http.put(this.url+'facturas/'+a,b);
  }

  /*  deletePublicacion(a: any){
    return this.http.delete(this.url+'publicacion/'+a);
  } */
}
