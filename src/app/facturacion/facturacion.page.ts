import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NuevaFacturaComponent } from './components/nueva-factura/nueva-factura.component';
import { DataService } from '../services/data.service';
import { ProductoPage } from '../producto/producto.page';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.page.html',
  styleUrls: ['./facturacion.page.scss'],
})
export class FacturacionPage implements OnInit {
  productos: any[] = [];
  produ: any[] = [];
  constructor(private modalCtrl: ModalController,
    public actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private nav: NavController,
    private dataService: DataService,) { }

  ngOnInit() {
    this.cargarDatos()
  }

  cargarDatos(){
    
    this.dataService.getProducto().subscribe((res: any) => {this.produ = res;  console.log(this.produ );})
  }
  async nuevoFactura() {
    const modal = await this.modalCtrl.create({
      component: NuevaFacturaComponent,
      cssClass:'modalFactura'
    });
    modal.present();

    const { data } = await modal.onWillDismiss();
    
    this.productos.push(data);
  }

  async crearPro() {
    const modal = await this.modalCtrl.create({
      component: ProductoPage,
      cssClass:'modalFactura'
    });
    modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
    if (data.guardado === true) {
      this.cargarDatos();
    }
    
    /* this.productos.push(data); */
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ingrese categoria',
      mode: 'ios',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Ingrese Nombre categoria',
        }
      ],
      buttons: [
        {
          text: 'Guardar',
          handler: (data)=>{
            this.guardarCategoria(data);
          },
        },    
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }

  guardarCategoria(data: any){
    const categ = {
      categoria: data.nombre
    }

    this.dataService.crearCategoria(categ).subscribe((res: any)=>{
      console.log(res);
      this.cargarDatos()
    })
    
  }

  guardarProducto(data: any){
    const producto = {
      bonbre: "string",
      color: "string",
      tipo: "string",
      talla: "string",
      precio: "string",
      categoria: "string",
    }
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Menu',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Agregar categoria',
          icon: 'share',
          handler: () => {
            this.presentAlert()
          },
        },
        {
          text: 'Agregar Producto',
          icon: 'caret-forward-circle',
          handler: () => {
            this.crearPro() 
          },
        },
        {
          text: 'Crear Factura',
          icon: 'caret-forward-circle',
          handler: () => {
            this.nuevoFactura()
          },
        },
        {
          text: 'Cerrar sesion',
          icon: 'close',
          handler: () => {
            this.cerrarsesion()
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  cerrarsesion() {
    this.nav.navigateRoot(['/login'])
  }
}
