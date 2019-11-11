import { Component, OnInit } from '@angular/core';

import * as React from 'react/cjs/react.production.min'

@Component({
  selector: 'lib-module-react',
  template: `
    <p>
      module-react works!
    </p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/> 
  `,
  styles: []
})
export class ModuleReactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('React', React)
  }

}
