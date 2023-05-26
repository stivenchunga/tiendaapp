import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  categorias: any[] = [];
  form: any
  formularioProducto!: FormGroup;
  constructor(
    public fb: FormBuilder,
    private modalController: ModalController,
    private dataService: DataService,
    private alertController: AlertController
  ) { 
    this.formularioProducto = this.fb.group({
      'bonbre': new FormControl("",Validators.required),
      "color": new FormControl("",Validators.required),
      "tipo": new FormControl("",Validators.required),
      "talla": new FormControl("",Validators.required),
      "precio": new FormControl("",Validators.required),
      "categoria": new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
    this.dataService.getCategorias().subscribe((res: any) => { this.categorias = res; console.log(this.categorias);})
  }

 async  aceptar() {
    this.form = this.formularioProducto.value;
    if(this.formularioProducto.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }

    const producto = {
      bonbre: this.form.bonbre,
      color: this.form.color,
      tipo: this.form.tipo,
      talla: this.form.talla,
      precio: this.form.precio,
      categoria: this.form.categoria,
    }
    console.log(producto);

    this.dataService.crearProducto(producto).subscribe ((res: any)=> {
      console.log(res);
      this.modalController.dismiss({guardado: true});
    })
    
  }

  cancelar() {
    this.modalController.dismiss();
  }
}
