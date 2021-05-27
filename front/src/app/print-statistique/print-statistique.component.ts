import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from 'src/models/statistique';

@Component({
  selector: 'app-print-statistique',
  templateUrl: './print-statistique.component.html',
  styleUrls: ['./print-statistique.component.css'],
})
export class PrintStatistiqueComponent implements OnInit {
  @Input() public stat!: Statistique;
  @Output() public demandeSuppression: EventEmitter<void>;

  /// CORRIGE DE L'EXERCICE 3 SUITE A UNE PETITE ERREUR DE PARCOUS
  /// on utilise bien les inputs cette fois-ci et le composant statistique affiche bien UNE SEULE stat ;)

  constructor() {
    this.demandeSuppression = new EventEmitter();
  }

  ngOnInit(): void {}

  traiterClickBouton() {
    this.demandeSuppression.emit();
  }
}
