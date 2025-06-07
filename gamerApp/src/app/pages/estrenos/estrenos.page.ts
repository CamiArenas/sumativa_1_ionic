import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-estrenos',
  templateUrl: './estrenos.page.html',
  styleUrls: ['./estrenos.page.scss'],
  standalone: false,
})
export class EstrenosPage implements OnInit {

  games = [
    {
      title: 'Forza Horizon 5',
      subtitle: 'Pc',
      image: 'https://media.vandal.net/i/1440x1080/3-2023/20233139421531_1.jpg',
      description: 'Explora paisajes impresionantes y compite en las carreras más emocionantes de México. Vive la velocidad como nunca antes.',

    },
    {
      title: 'Resident Evil',
      subtitle: 'Pc/Consola',
      image: 'https://m.media-amazon.com/images/M/MV5BNmFjODgwYzAtOTBiZS00MjZjLWE0MzgtODY0YWVhNTEyMDMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      description: 'Revive el clásico del survival horror con gráficos renovados y una jugabilidad mejorada. ¿Podrás rescatar a Ashley y sobrevivir al terror?',

    },
    {
      title: 'Call of Duty',
      subtitle: 'Pc/Consola',
      image: 'https://assets.xboxservices.com/assets/71/b5/71b50f29-5799-4be1-97ef-d58d57c9fe37.jpg?n=CoD-Modern-Warfare-III_GLP-Page-Hero-0_1083x1222_02.jpg',
      description: 'Acción intensa, combate táctico y una campaña explosiva. Domina el campo de batalla en el nuevo capítulo de esta icónica saga.',

    },
    

  ]

  constructor() { }

  ngOnInit() {
  }

}
