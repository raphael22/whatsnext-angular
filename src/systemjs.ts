
declare const SystemJS

import * as TsLib from 'tslib';
SystemJS.set('tslib', SystemJS.newModule(TsLib))


import * as AngularCore from '@angular/core';
SystemJS.set('@angular/core', SystemJS.newModule(AngularCore))
import * as AngularCommon from '@angular/common';
SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon))
import * as AngularRouter from '@angular/router';
SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter))