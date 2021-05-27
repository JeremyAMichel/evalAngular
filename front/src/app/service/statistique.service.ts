import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statistique } from 'src/models/statistique';

@Injectable({
  providedIn: 'root',
})
export class StatistiqueService {
  public tabStats: Statistique[] = [];

  constructor(private http: HttpClient) {}

  getStats(): Promise<Statistique[]> {
    return this.http
      .get('https://stats.naminilamy.fr')
      .toPromise()
      .then((obj: any) => {
        for (let o of obj) {
          this.tabStats.push(
            new Statistique(o.id, o.title, o.value, o.appreciation)
          );
        }
        return this.tabStats;
      });
  }

  ajoutStats(
    id: string,
    title: string,
    value: string,
    appreciation: string
  ): Promise<Statistique[]> {
    let donneesSaisies = {
      id: id,
      title: title,
      value: value,
      appreciation: appreciation,
    };

    return this.http
      .post('https://stats.naminilamy.fr', donneesSaisies)
      .toPromise()
      .then((obj: any) => {
        this.tabStats.push(
          new Statistique(obj.id, obj.title, obj.value, obj.appreciation)
        );
        return this.tabStats;
      });
  }

  deleteStat(stat: Statistique) {
    return this.http
      .delete('https://stats.naminilamy.fr' + stat.id)
      .toPromise()
      .then(() => {
        console.log('la stat a bien été supprimé');
      });
  }
}
