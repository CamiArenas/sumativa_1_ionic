import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudaFaqPageRoutingModule } from './ayuda-faq-routing.module';

import { AyudaFaqPage } from './ayuda-faq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudaFaqPageRoutingModule
  ],
  declarations: [AyudaFaqPage]
})
export class AyudaFaqPageModule {}
