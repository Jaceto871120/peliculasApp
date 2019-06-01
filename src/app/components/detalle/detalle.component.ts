import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DatalocalService } from '../../services/datalocal.service';

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

  corazon = 'heart-empty';

  pelicula: PeliculaDetalle = {};

  constructor(private moviesService: MoviesService,
              private modalController: ModalController,
              private dataLocal: DatalocalService) { }

  ngOnInit() {

    this.dataLocal.existePelicula(this.id)
    .then(existe => this.corazon = (existe) ? 'heart' : 'heart-empty');

    this.moviesService.getPeliculaDetalle(this.id)
                      .subscribe( resp => {
                        this.pelicula = resp;
                      });

    this.moviesService.getActoresPelicula(this.id)
                      .subscribe( resp => {
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
    const existe = this.dataLocal.guardarPelicula(this.pelicula);
    this.corazon = (existe) ? 'heart' : 'heart-empty';
  }
}
