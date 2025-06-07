import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-ayuda-faq',
  templateUrl: './ayuda-faq.page.html',
  styleUrls: ['./ayuda-faq.page.scss'],
  standalone: false,
})
export class AyudaFaqPage implements OnInit {

  data = [
  {
    pregunta: '¿Cómo compro un juego en GameApp?',
    respuesta: 'Por ahora no tenemos compras habilitadas, pero pronto podrás agregar juegos a tu carrito y pagarlos fácilmente.'
  },
  {
    pregunta: '¿Necesito una cuenta para jugar?',
    respuesta: 'Sí, deberás registrarte para acceder a tus juegos, logros y configuraciones personalizadas.'
  },
  {
    pregunta: '¿Los juegos son compatibles con mi consola o PC?',
    respuesta: 'Cada juego incluye información sobre plataformas compatibles: PS5, Xbox, PC, Steam, etc.'
  },
  {
    pregunta: '¿Cuándo se lanzará la tienda completa?',
    respuesta: 'Estamos trabajando duro para lanzarla pronto. ¡Síguenos en redes para más novedades!'
  },
  {
    pregunta: '¿Puedo agregar juegos a una lista de deseos?',
    respuesta: 'Esa función estará disponible en la versión final. Por ahora, puedes explorar el catálogo y marcar tus favoritos.'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
