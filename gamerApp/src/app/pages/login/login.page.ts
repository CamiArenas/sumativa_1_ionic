import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  async onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log("Logeaste");

    const loading: HTMLIonLoadingElement = await this.loadingCtrl.create({
      spinner: 'circles',
      cssClass: 'custom-spinner',
      backdropDismiss: false,
    });

    await loading.present();

    setTimeout(async () => {
      await loading.dismiss();
      this.navCtrl.navigateRoot('/home');
    }, 3000);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}

