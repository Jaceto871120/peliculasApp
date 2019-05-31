import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slide-show-pares',
  templateUrl: './slide-show-pares.component.html',
  styleUrls: ['./slide-show-pares.component.scss'],
})
export class SlideShowParesComponent implements OnInit {

  slideOpts = {
    slidesPerView: 3.2,
    freeMode: true,
    spaceBetween: -10,
  };

  @Input() peliculas: Pelicula[] = [];

  @Output() cargarMas = new EventEmitter();

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onClick() {
    this.cargarMas.emit();
  }

  async onClick2(id: string) {
    const modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }
}
