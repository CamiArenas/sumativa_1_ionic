import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseForoService } from 'src/app/services/database-foro.service';
import { Router } from '@angular/router';
import { CamserviceService } from 'src/app/services/camservice.service.spec';
import { Photo } from '@capacitor/camera';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.page.html',
  styleUrls: ['./foro.page.scss'],
  standalone:false,
  
})
export class ForoPage implements OnInit {
  public vistadefoto: string | undefined;
  postForm!: FormGroup;
  selectedImageBase64: string = '';
  public photo: Photo | null = null;                                                             

  constructor(
    private fb: FormBuilder,
    private servicioDb: DatabaseForoService,
    private router: Router,
    private serviciocamara: CamserviceService,
    
  ) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: [''],
      imagen: [''],
    });
  }

  async guardar() {
    if (this.postForm.invalid) {
      return;
    }

    await this.servicioDb.agregarPost(this.postForm.value); // si aún se llama agregarRepuesto en el servicio
    this.postForm.reset();
    this.router.navigate(['/foro-listar']); // ajusta la ruta si es necesario
  }

  async tomarFoto(): Promise<void> {
    const foto: Photo = await this.serviciocamara.capturarFoto();
    this.vistadefoto = foto.dataUrl;
    this.selectedImageBase64 = foto.dataUrl || '';
    this.postForm.patchValue({ imagen: foto.dataUrl });
  }

  async seleccionarImagen(): Promise<void> {
    const foto = await this.serviciocamara.seleccionarDeGaleria();
    this.vistadefoto = foto.dataUrl;
    this.postForm.patchValue({ imagen: foto.dataUrl });
  }
}
