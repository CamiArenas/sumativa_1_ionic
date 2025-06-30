import { Component, OnInit } from '@angular/core';
import { ForoPost } from 'src/app/models/foro-post';
import { DatabaseForoService } from 'src/app/services/database-foro.service';

@Component({
  selector: 'app-mis-posts',
  templateUrl: './mis-posts.page.html',
  styleUrls: ['./mis-posts.page.scss'],
  standalone: false,
})
export class MisPostsPage implements OnInit {
  posts: ForoPost[] = [];

  constructor(private servicioDb: DatabaseForoService) {}

  ngOnInit() {
    this.servicioDb.getDatabaseState().subscribe((ready) => {
      if (ready) {
        this.servicioDb.listaPosts.subscribe((data) => {
          this.posts = data;
        });
        this.servicioDb.buscarPosts(); // Actualiza al abrir
      }
    });
  }

  async eliminarPost(id: number) {
    await this.servicioDb.eliminarPost(id);
  }
}
