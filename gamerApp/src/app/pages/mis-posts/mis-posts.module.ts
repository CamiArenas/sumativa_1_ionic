import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPostsPageRoutingModule } from './mis-posts-routing.module';

import { MisPostsPage } from './mis-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPostsPageRoutingModule
  ],
  declarations: [MisPostsPage]
})
export class MisPostsPageModule {}
