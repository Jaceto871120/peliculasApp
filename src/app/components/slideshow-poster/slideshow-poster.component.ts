import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  slideOpts = {
    slidesPerView: 3.2,
    freeMode: true,
  };

  @Input() peliculas: Pelicula[] = [];

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

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
