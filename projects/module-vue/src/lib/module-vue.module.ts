import { NgModule } from '@angular/core';
import { ModuleVueComponent } from './module-vue.component';
import { ModuleVueRoutingModule } from './module-vue.routing';



@NgModule({
  declarations: [ModuleVueComponent],
  imports: [ModuleVueRoutingModule],
  exports: [ModuleVueComponent],
  entryComponents: [ModuleVueComponent]
})
export class ModuleVueModule { }
