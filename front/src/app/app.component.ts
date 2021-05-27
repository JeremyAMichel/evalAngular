import { Component, OnInit } from '@angular/core';
import { Statistique } from 'src/models/statistique';
import { StatistiqueService } from './service/statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Examen-Angular';
  public tabStats!: Statistique[];
  // public tabStats: Statistique[] = [
  //   {
  //     id: 'fa1f5f39-bf3b-114b-9aec-7f5822ecfb46',
  //     titre: 'Nombre de Tongues en France',
  //     valeur: '300000000',
  //     appreciation: 'WARNING',
  //   },
  //   {
  //     id: 'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
  //     titre: 'Démographie en France',
  //     valeur: '60M',
  //     appreciation: 'SUCCESS',
  //   },
  // ];

  constructor(private apiService: StatistiqueService) {
    this.apiService.getStats().then((tabStats) => (this.tabStats = tabStats));
    // setTimeout(() => {
    //   this.tabStats.push(
    //     new Statistique('hfihlhgozhem', 'ez pz', '1', 'DANGER')
    //   );
    // }, 3000);
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  supprStat(stat: Statistique) {
    this.apiService.deleteStat(stat);
  }
}
