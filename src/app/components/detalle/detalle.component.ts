import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  slideOpts = {
    slidesPerView: 3.2,
    freeMode: true,
    spaceBetween: -10,
  };

  actores: Cast[] = [];

  ocultar = 150;

  pelicula: PeliculaDetalle = {};

  constructor(private moviesService: MoviesService,
              private modalController: ModalController) { }

  ngOnInit() {
    console.log('ID', this.id);
    this.moviesService.getPeliculaDetalle(this.id)
                      .subscribe( resp => {
                        console.log('Detalles', resp);
                        this.pelicula = resp;
                      });

    this.moviesService.getActoresPelicula(this.id)
                      .subscribe( resp => {
                        console.log('Actores', resp);
                        this.actores = resp.cast;
                      });
  }
  onClick() {
    this.ocultar = 5000;
  }

  regresar() {
    this.modalController.dismiss();
  }

  favorito() {

  }
}
