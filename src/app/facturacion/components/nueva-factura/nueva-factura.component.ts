import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nueva-factura',
  templateUrl: './nueva-factura.component.html',
  styleUrls: ['./nueva-factura.component.scss'],
})
export class NuevaFacturaComponent implements OnInit {

  @Input() dat: any;
  formularioFactura: FormGroup | any;
  produtoSeleccionados: any[] = [];
  produ: any[] = [];
  productos: any[] = [];
  btn = 'aceptar'

  constructor(private formBuilder: FormBuilder,
    private modalController: ModalController,
    private dataService: DataService) {
    this.construirFormulario();
  }

  ngOnInit( ) {
    console.log(this.dat);
    this.dataService.getProducto().subscribe((res: any) => {this.productos= res;  console.log(this.productos );})
    this.inicio(this.dat.tipo)
   } 

  construirFormulario() {
    this.formularioFactura = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      tipoFactura: ['', [Validators.required]],
      extra: ['', ],
    })
  }

  inicio(a: any){
    if (a ==1) {
      
    }else if (a ==2) {
      this.btn  = 'actualizar'
      console.log(this.dat.id);
      this.dataService.getFaturasById(this.dat.id).subscribe((res: any) => {
        console.log(res);
        this.formularioFactura.patchValue({
          nombre: res.nombre,
          tipoFactura: res.tipo,
        });
        this.produtoSeleccionados = res.productos;
        console.log(this.produtoSeleccionados );
        /* this.productos= res;  
         */
      })
    }
  }

  productoSeleccionado(event: any) {
    let id = event.detail.value
    for (const item of this.productos) {
      if (item.id == id) {
        this.produtoSeleccionados.push(item)
        console.log(this.produtoSeleccionados);
        
      }
    }
    console.log(this.produtoSeleccionados)
  }

  aceptar() {
    const fr = this.formularioFactura.value
    const body ={
      nombre: fr.nombre,
      tipo: fr.tipoFactura,
      productos: this.produtoSeleccionados,
    }
    if (this.btn === 'aceptar') {
      this.dataService.crearFacturas(body).subscribe((res: any) => {
        console.log(res);
      })
      this.modalController.dismiss({result:true});
    } else if (this.btn === 'actualizar'){
      this.dataService.putFaturas(this.dat.id, body).subscribe((res: any)=>{
        console.log(res);
        this.modalController.dismiss({result:true});
      })
    }
    
  }

  cancelar() {
    this.modalController.dismiss();
  }

  eliminarProducto(posicion: any){
    console.log(posicion);
    this.produtoSeleccionados.splice(posicion, 1)
  }

}
