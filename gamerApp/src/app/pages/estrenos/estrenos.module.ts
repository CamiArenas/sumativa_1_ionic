import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstrenosPageRoutingModule } from './estrenos-routing.module';

import { EstrenosPage } from './estrenos.page';
import {MatCardModule} from '@angular/material/card';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatCardModule,
    SideMenuComponent,
    EstrenosPageRoutingModule
  ],
  declarations: [EstrenosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EstrenosPageModule {}
