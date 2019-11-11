import { Component, Compiler, Injector, ViewChild, ViewContainerRef, ElementRef, AfterViewInit } from '@angular/core';
import { Router, Route, RouterEvent } from '@angular/router';
import { ModulesService } from './modules.service';
declare const SystemJS

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
