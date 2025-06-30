import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForoPageRoutingModule } from './foro-routing.module';

import { ForoPage } from './foro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ForoPage]
})
export class ForoPageModule {}
