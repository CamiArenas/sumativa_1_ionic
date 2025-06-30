import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UserServiceService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router,
  ) {}

  ngOnInit() {    
    this.loginForm = this.fb.group({
    username: ['', [Validators.required]],  // ✅ CAMBIA AQUI
    password: ['', Validators.required]
  });

    
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  async onLogin() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'Iniciando sesión...',
      backdropDismiss: false,
    });
    await loading.present();

    try {
      const user = await this.usuarioService.login(
        this.username?.value,
        this.password?.value
      );
      await loading.dismiss();

      if (user) {
        this.navCtrl.navigateRoot('/home');
      } else {
        const toast = await this.toastCtrl.create({
          message: 'Usuario o contraseña incorrectos.',
          duration: 3000,
          color: 'danger'
        });
        toast.present();
      }
    } catch (err) {
      await loading.dismiss();
      const toast = await this.toastCtrl.create({
        message: 'Error al acceder a la base de datos.',
        duration: 3000,
        color: 'danger'
      });
      toast.present();
      console.error('Error en login:', err);
    }
  }

  

  redRegister() {
    this.router.navigate(['/register']);
  }
}
