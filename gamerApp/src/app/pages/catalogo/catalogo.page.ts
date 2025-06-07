import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone:false,
})
export class CatalogoPage implements OnInit {

  games = [
  {
    title: 'Elden Ring',
    subtitle: 'Pc',
    description: `Embárcate en una aventura épica en un mundo abierto lleno de peligros, magia y secretos por descubrir. ¿Estás listo para convertirte en el Señor del Círculo?`,
    image: 'https://p325k7wa.twic.pics/high/elden-ring/elden-ring/03-news/ER-SOTE-announcement.jpg?twic=v1/cover=500x556/step=10/quality=80'
  },
  
  {
    title: 'Shadow Warrior',
    subtitle: 'Pc',
    description: 'Explora paisajes impresionantes y combate en las mazmorras más emocionantes. Vive la adrenalina como nunca antes.',
    image: 'https://images.unsplash.com/photo-1600066975952-912a81940822?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Lego Mario world',
    subtitle: 'Nintendo',
    description: 'Clásico juego de Mario world, en la versión de Lego',
    image: 'https://images.unsplash.com/photo-1633349105097-0d6ad738d78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpZGVvanVlZ29zfGVufDB8MnwwfHx8MA%3D%3D'
  },

  {
    title: 'Pro Evolution Soccer',
    subtitle: 'Pc/Consola',
    description: 'Desafía a tus amigos o a la máquina y demuestra quién es el mejor',
    image: 'https://images.unsplash.com/photo-1727838204816-3e23b4a01bcb?q=80&w=1455&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

  constructor(
    private alertController: AlertController,
    public navCtrl:NavController
  ) { }

  ngOnInit() {
  }

  async btnComprar(){
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas comprar este juego?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Compra cancelada');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.registerRecipe();
          }
        }
      ]
    });

     alert.present();

  }


  registerRecipe(){
    console.log("Compra Confirmada")
    this.navCtrl.navigateRoot('/home')

  }

}
