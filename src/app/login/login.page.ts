import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AlertController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { 
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  ingresar: any;
  form: any

  constructor(
    public fb: FormBuilder,
    private dataService: DataService,
    private navCtrl: NavController,
    public toastCtrl: ToastController,
    private alertController: AlertController
    
    ) {

    this.formularioLogin = this.fb.group({
      'name': new FormControl("",Validators.required),
      "password": new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }

  async login(){
    this.form =  this.formularioLogin.value
    console.log(this.form.name);
    this.dataService.loginUsuario(this.form.name).subscribe(async (res: any)=>{
      console.log(res);
      if (res == null) {
        const alert = await this.alertController.create({
          header: 'Datos incompletos',
          message: 'El usuario no se encontro',
          buttons: ['Aceptar']
        });
        
         alert.present();
        this.present_toast('el usuario no existe');
      } else {
        if (this.form.password === res.contrasena) {
          this.navCtrl.navigateRoot(['./facturacion']);
        } else {
          this.present_toast('contraseña incorrecta');
          const alert = await this.alertController.create({
            header: 'Datos incompletos',
            message: 'contraseña incorrecta',
            buttons: ['Aceptar']
          });
           alert.present();
        }
      }
    },
    (err)=>{
      console.log(err);
      
    })
   /*  if (this.nameUser?.value === '' && this.password?.value === '' ) {
      this.present_toast('Rellenar campos');
    } else {
      console.log(this.nameUser?.value);
      
      
    } */
  }

  async present_toast(a: any){
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
