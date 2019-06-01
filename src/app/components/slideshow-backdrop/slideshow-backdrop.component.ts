import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  slideOpts = {
    slidesPerView: 1.1,
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
