import { Injectable } from "@angular/core";
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IModule {
  path: string,
  zone?: string,
  url?: string
}

@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  public modules$: ReplaySubject<any> = new ReplaySubject(1);
  private modules: IModule[] = [];

  constructor(private http: HttpClient) {
    this.http.get('./assets/api/modules.json').toPromise()
      .then((json: any) => {
        this.modules = json.modules;
        console.log('ModulesService', this.modules)
        this.modules$.next(this.modules)
      })
      .catch((error) => console.error('ModulesService', error))
  }
}