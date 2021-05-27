import { Component, OnInit } from '@angular/core';
import { Statistique } from 'src/models/statistique';

@Component({
  selector: 'app-print-statistique',
  templateUrl: './print-statistique.component.html',
  styleUrls: ['./print-statistique.component.css'],
})
export class PrintStatistiqueComponent implements OnInit {
  public stat1: Statistique = new Statistique(
    'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
    'Démographie en France',
    '60M',
    'SUCCESS'
  );
  public stat2: Statistique = new Statistique(
    'fa1f5f39-bf3b-114b-9aec-7f5822ecfb46',
    'Nombre de Tongues en France',
    '300000000',
    'WARNING'
  );

  constructor() {}

  ngOnInit(): void {}
}
