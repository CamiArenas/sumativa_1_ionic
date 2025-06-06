import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyudaFaqPage } from './ayuda-faq.page';

const routes: Routes = [
  {
    path: '',
    component: AyudaFaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyudaFaqPageRoutingModule {}
