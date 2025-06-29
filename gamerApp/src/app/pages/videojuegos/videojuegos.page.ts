import { Component, OnInit } from '@angular/core';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.page.html',
  styleUrls: ['./videojuegos.page.scss'],
  standalone:false,
})
export class VideojuegosPage implements OnInit {
  juegos: any[] = [];
  tituloBuscado: string = 'halo';

  constructor(private videojuegosService: VideojuegosService) {}

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    this.videojuegosService.buscarJuegos(this.tituloBuscado).subscribe({
      next: (data) => (this.juegos = data),
      error: (err) => console.error('Error al buscar juegos', err),
    });
  }
}
