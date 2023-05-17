import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nueva-factura',
  templateUrl: './nueva-factura.component.html',
  styleUrls: ['./nueva-factura.component.scss'],
})
export class NuevaFacturaComponent implements OnInit {

  formularioFactura: FormGroup | any;
  produtoSeleccionados: any[] = [];

  productos: any[] = [
    { value: 'Avena', id: '1', precio: '2000' },
    { value: 'Unidad Huevo', id: '2', precio: '300' },
    { value: 'Res por libra', id: '3', precio: '8000' },
    { value: 'Azucar', id: '4', precio: '1500' },
    { value: 'Mantequilla 500g', id: '5', precio: '6000' },
    { value: 'Sal', id: '6', precio: '1100' },
  ];

  constructor(private formBuilder: FormBuilder,
    private modalController: ModalController) {
    this.construirFormulario();
  }

  ngOnInit() { }

  construirFormulario() {
    this.formularioFactura = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      tipoFactura: ['', [Validators.required]]
    })
  }

  productoSeleccionado(event: any) {
    let id = event.detail.value
    for (const item of this.productos) {
      if (item.id == id) {
        this.produtoSeleccionados.push(item)
      }
    }
    console.log(this.produtoSeleccionados)
  }

  aceptar() {
    this.modalController.dismiss({formulario:this.formularioFactura.value});
  }

  cancelar() {
    this.modalController.dismiss();
  }

}
