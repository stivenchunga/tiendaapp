import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturacionPageRoutingModule } from './facturacion-routing.module';

import { FacturacionPage } from './facturacion.page';
import { NuevaFacturaComponent } from './components/nueva-factura/nueva-factura.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacturacionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FacturacionPage,NuevaFacturaComponent]
})
export class FacturacionPageModule {}
