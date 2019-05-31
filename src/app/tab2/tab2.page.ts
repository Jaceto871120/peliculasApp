import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  buscando = false;
  peliculas: Pelicula[] = [];

  ideas: string[] = ['Spiderman', 'Thor', 'Avengers', 'Pokemon', 'El Señor de los Anillos'];

  constructor( private movieService: MoviesService,
               private modalController: ModalController) {}

  onSearchChange(event) {
    const valor = event.detail.value;
    if (valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }

    this.buscando = true;

    this.movieService.buscarPeliculas(valor)
                    .subscribe( resp => {
                      this.peliculas = resp.results;
                      this.buscando = false;
                    });
  }

  async onClick(id: string) {
    const modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }
}
