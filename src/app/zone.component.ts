import { Component, Compiler, Injector, ViewChild, ViewContainerRef, ElementRef, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { Router, Route, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ModulesService, IModule } from './modules.service';
import { Subscription } from 'rxjs';
declare const SystemJS

@Component({
  selector: 'app-zone',
  template: `
    <ng-container #root></ng-container>
  `,
  styles: ['']
})
export class ZoneComponent implements AfterViewInit, OnDestroy {
  @Input() zone: any;
  @ViewChild('root', { read: ViewContainerRef }) root: ViewContainerRef;
  private modules$: Subscription

  constructor(private modulesService: ModulesService, private compiler: Compiler, private injector: Injector) {
  }

  ngAfterViewInit() {
    this.modules$ = this.modulesService.modules$.subscribe(this.loadModules.bind(this));
  }

  loadModules(modules: IModule[]) {
    for (const moduleDef of modules) {
      if (moduleDef.zone && moduleDef.zone == this.zone) {
        SystemJS.import(moduleDef.path).then((module) => {
          this.loadComponent(moduleDef, module)
        })
      }
    }
  }

  private loadComponent(moduleDef, module) {
    console.log('ZoneComponent::loadComponent', moduleDef, module)
    this.compiler.compileModuleAndAllComponentsAsync(module[moduleDef.module])
      .then((compiled) => {
        let moduleRef = compiled.ngModuleFactory.create(this.injector);
        const components = compiled.componentFactories
        let factory = compiled.componentFactories[components.length - 1];
        if (factory) {
          let component = this.root.createComponent(factory);
          let instance = component.instance;
        }
      });
  }

  ngOnDestroy() {
    this.modules$.unsubscribe();
  }
}
