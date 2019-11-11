import { NgModule } from '@angular/core';
import { ModuleReactComponent } from './module-react.component';
import { ModuleReactRoutingModule } from './module-react.routing';


@NgModule({
  declarations: [ModuleReactComponent],
  imports: [ModuleReactRoutingModule],
  exports: [ModuleReactComponent],
  entryComponents: [ModuleReactComponent]
})
export class ModuleReactModule { }
