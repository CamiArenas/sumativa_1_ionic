import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,    
})
export class HomePage {
  
  games = [
  {
    title: 'Elden Ring',
    description: `Embárcate en una aventura épica en un mundo abierto lleno de peligros, magia y secretos por descubrir. ¿Estás listo para convertirte en el Señor del Círculo?`,
    image: 'https://p325k7wa.twic.pics/high/elden-ring/elden-ring/03-news/ER-SOTE-announcement.jpg?twic=v1/cover=500x556/step=10/quality=80'
  },
  {
    title: 'Forza Horizon 5',
    description: 'Explora paisajes impresionantes y compite en las carreras más emocionantes de México. Vive la velocidad como nunca antes.',
    image: 'https://media.vandal.net/i/1440x1080/3-2023/20233139421531_1.jpg'
  },
  {
    title: 'Resident Evil 4 Remake',
    description: 'Revive el clásico del survival horror con gráficos renovados y una jugabilidad mejorada. ¿Podrás rescatar a Ashley y sobrevivir al terror?',
    image: 'https://m.media-amazon.com/images/M/MV5BNmFjODgwYzAtOTBiZS00MjZjLWE0MzgtODY0YWVhNTEyMDMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: 'Call of Duty: Modern Warfare II',
    description: 'Acción intensa, combate táctico y una campaña explosiva. Domina el campo de batalla en el nuevo capítulo de esta icónica saga.',
    image: 'https://assets.xboxservices.com/assets/71/b5/71b50f29-5799-4be1-97ef-d58d57c9fe37.jpg?n=CoD-Modern-Warfare-III_GLP-Page-Hero-0_1083x1222_02.jpg'
  }
];

  constructor( public navCtrl:NavController,) {}

  verCatalogo(){
    this.navCtrl.navigateRoot('/catalogo')
  }

}
