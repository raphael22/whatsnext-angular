import { NgModule } from '@angular/core';
import { ModuleReactComponent } from './module-react.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
    {
        path: '',
        component: ModuleReactComponent
    }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleReactRoutingModule { }
