import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPostsPage } from './mis-posts.page';

const routes: Routes = [
  {
    path: '',
    component: MisPostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPostsPageRoutingModule {}
