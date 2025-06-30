import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ForoPost } from '../models/foro-post';


@Injectable({
  providedIn: 'root',
})
export class DatabaseForoService {
  public database!: SQLiteObject;

 
  private sqlCrearPost: string = `
  CREATE TABLE IF NOT EXISTS post (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    descripcion TEXT,
    imagen TEXT
  )
`;


  // Observable para manejar post en tiempo real
  public listaPosts = new BehaviorSubject<ForoPost[]>([]);
  private isDBReady = new BehaviorSubject<boolean>(false);

  constructor(
    private sqlite: SQLite,
    private platform: Platform,
    private toastController: ToastController,
    private alertController: AlertController
  ) {
    this.platform.ready().then(() => {
      this.crearBD();
    });
  }

  getDatabaseState() {
    return this.isDBReady.asObservable();
  }

  // Toast
  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      icon: 'information-circle',
    });
    await toast.present();
  }

  // Alert
  async presentAlerte(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Crear base de datos
  crearBD() {
    this.sqlite
      .create({
        name: 'foropost.db',
        location: 'default',
      })
      .then((db: SQLiteObject) => {
        this.database = db;
        this.crearTablas();
      })
      .catch((e) => {
        this.presentToast('Error al crear BD: ' + e);
      });
  }

  // Crear tabla de posts
  async crearTablas() {
    try {
      await this.database.executeSql(this.sqlCrearPost, []);
      this.buscarPosts();
      this.isDBReady.next(true);
    } catch (e) {
      this.presentToast('Error al crear tabla: ' + e);
    }
  }

  // Insertar nuevo post
  async agregarPost(post: Omit<ForoPost, 'id'>) {
  const sql = `INSERT INTO post (titulo, descripcion, imagen) VALUES (?, ?, ?)`;
  const data = [post.titulo, post.descripcion, post.imagen];
  try {
    await this.database.executeSql(sql, data);
    this.presentToast('Post guardado');
    this.buscarPosts();
  } catch (e) {
    this.presentToast('Error al guardar post: ' + e);
  }
}


  // Obtener todos los post
  async buscarPosts(): Promise<void> {
  try {
    const res = await this.database.executeSql('SELECT * FROM post', []);
    const items: ForoPost[] = [];
    for (let i = 0; i < res.rows.length; i++) {
      const r = res.rows.item(i);
      items.push(new ForoPost(r.id, r.titulo, r.descripcion, r.imagen));
    }
    this.listaPosts.next(items);
  } catch (e) {
    this.presentToast('Error al obtener posts: ' + e);
  }
}


  // Actualizar post existente por id
  async actualizarPost(post: ForoPost) {
  const sql = `UPDATE post SET titulo = ?, descripcion = ?, imagen = ? WHERE id = ?`;
  const data = [post.titulo, post.descripcion, post.imagen, post.id];
  try {
    await this.database.executeSql(sql, data);
    this.presentToast('Post actualizado');
    this.buscarPosts();
  } catch (e) {
    this.presentToast('Error al actualizar post: ' + e);
  }
}


  async eliminarPost(id: number) {
  const sql = `DELETE FROM post WHERE id = ?`;
  try {
    await this.database.executeSql(sql, [id]);
    this.presentToast('Post eliminado');
    this.buscarPosts();
  } catch (e) {
    this.presentToast('Error al eliminar post: ' + e);
  }
}

}
