import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage-angular';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [AppComponent],
  imports: [IonicStorageModule.forRoot(),HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,SideMenuComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SQLite],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
