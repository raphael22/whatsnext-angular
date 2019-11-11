import { NgModule } from '@angular/core';
import { ModuleVueComponent } from './module-vue.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
    {
        path: '',
        component: ModuleVueComponent
    }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleVueRoutingModule { }
