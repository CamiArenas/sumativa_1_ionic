import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoPageRoutingModule } from './catalogo-routing.module';

import { CatalogoPage } from './catalogo.page';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    SideMenuComponent,
    FormsModule,
    IonicModule,
    CatalogoPageRoutingModule,
    MatCardModule,
  ],
  declarations: [CatalogoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CatalogoPageModule {}
