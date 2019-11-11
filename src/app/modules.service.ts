import { Injectable } from "@angular/core";
import { ReplaySubject } from 'rxjs';

export interface IModule {
  module: string,
  path: string,
  zone?: string,
  url?: string
}

@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  public modules$: ReplaySubject<any> = new ReplaySubject(1);
  private modules: IModule[] = [
    {
      zone: '1',
      module: 'ModuleReactModule',
      url: 'react',
      path: 'assets/modules/module-react/module-react.js'
    },
    {
      zone: '2',
      module: 'ModuleVueModule',
      url: 'vue',
      path: 'assets/modules/module-vue/module-vue.js'
    }
  ]
  constructor() {
    this.modules$.next(this.modules);
  }
}