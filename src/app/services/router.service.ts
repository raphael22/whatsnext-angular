import { Injectable } from "@angular/core";
import { Route, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

import { ModulesService, IModule } from './modules.service';
declare const SystemJS

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private routeOnError: string

  constructor(private router: Router, private modulesService: ModulesService) {
    this.modulesService.modules$.subscribe(this.loadModules.bind(this));
    this.router.events.pipe(filter(e => e.constructor.name === 'NavigationError')).subscribe((event: RouterEvent) => {
      this.routeOnError = event.url;
    })
  }

  loadModules(modules: IModule[]) {
    for (const moduleDef of modules) {
      if (moduleDef.url) {
        try {
          SystemJS.import(moduleDef.path).then((module) => {
            this.loadRoute(moduleDef, module)
          })
        }
        catch (error) {
          console.error('RouterService::loadRoute', moduleDef, error)
        }
      }
    }
  }

  loadRoute(moduleDef: IModule, module) {
    console.log('RouterService::loadRoute', moduleDef, module)
    const route: Route = {
      path: moduleDef.url,
      loadChildren: () => module.default
    }

    this.router.config.push(route)
    this.router.resetConfig(this.router.config)
    if (this.routeOnError && this.routeOnError.match(moduleDef.url)) {
      this.router.navigate([moduleDef.url])
    }
  }
}