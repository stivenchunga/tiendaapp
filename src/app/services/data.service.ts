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
  //publicacion

  /* getPublicacion(){
    return this.http.get(this.url+'publicacion');
  }

  postPublicacion(a: any){
    return this.http.post(this.url+'publicacion', a);
  }

  putPublicacion(a:any, b:any){
    return this.http.get(this.url+'usuario/'+a,b);
  }

  deletePublicacion(a: any){
    return this.http.delete(this.url+'publicacion/'+a);
  } */
}
