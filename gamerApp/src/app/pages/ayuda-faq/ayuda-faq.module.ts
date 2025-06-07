import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudaFaqPageRoutingModule } from './ayuda-faq-routing.module';

import { AyudaFaqPage } from './ayuda-faq.page';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudaFaqPageRoutingModule,
    MatExpansionModule,
  MatIconModule,
  MatButtonModule
  ],
  declarations: [AyudaFaqPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AyudaFaqPageModule {}
