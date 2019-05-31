import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

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

  constructor() { }

  ngOnInit() {}

}
