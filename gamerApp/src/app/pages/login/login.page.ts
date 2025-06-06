import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  constructor(public navCtrl:NavController,) { }

  ngOnInit() {
  }

  onLogin(){
    console.log("logeaste")
    this.navCtrl.navigateRoot('/home')
  }

}
