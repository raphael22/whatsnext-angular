import { Component, OnInit } from '@angular/core';

import * as Vue from 'vue/dist/vue';

@Component({
  selector: 'lib-module-vue',
  template: `
    <p>
      module-vue works!
    </p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"/> 
  `,
  styles: []
})
export class ModuleVueComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    console.log('Vue', Vue)
  }

}
