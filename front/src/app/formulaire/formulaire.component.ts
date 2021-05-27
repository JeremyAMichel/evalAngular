import { Component, OnInit } from '@angular/core';
import { StatistiqueService } from '../service/statistique.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  public id!: string;
  public title!: string;
  public value!: string;
  public appreciation!: string;

  constructor(private apiService: StatistiqueService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.apiService.ajoutStats(
      this.id,
      this.title,
      this.value,
      this.appreciation
    );
  }
}
