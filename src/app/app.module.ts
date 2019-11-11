import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Compiler, COMPILER_OPTIONS, CompilerFactory } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ZoneComponent } from './zone.component';
import { RouterService } from './router.service';

@NgModule({
  declarations: [
    AppComponent,
    ZoneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { useHash: true })
  ],
  providers: [
    {
      provide: COMPILER_OPTIONS,
      useValue: {},
      multi: true
    },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS]
    },
    {
      provide: Compiler,
      useFactory: createCompiler,
      deps: [CompilerFactory]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private routerService: RouterService) {
  }
}


export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}