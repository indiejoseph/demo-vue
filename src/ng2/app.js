import 'zone.js';
import 'reflect-metadata';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import FileItem from './FileItem';
import RenderItem from './RenderItem';
import './styles/app.sass';

@Component({
  selector: '#ng2',
  templateUrl: './template.html'
})
class App {
  constructor () {
    this.renderItems = [];
    this.renderTime = 0;
    this.timer = 0;
    this.fileSizes = [
      { name: '@angular/common@2.1.2', size: 118 },
      { name: '@angular/compiler@2.1.2', size: 805 },
      { name: '@angular/core@2.1.2', size: 377 },
      { name: '@angular/platform-browser@2.1.2', size: 117 },
      { name: '@angular/platform-browser-dynamic@2.1.2', size: 6.7 },
      { name: 'rxjs@5.0.0-rc.2', size: 483 },
      { name: 'zone.js@0.6.26', size: 57 },
    ];
  }

  clickHandler () {
    this.rendered = 0;
    this.renderItems = Array.apply(null, { length: 10000 }).map(Number.call, Number);
    this.renderTime = new Date();
  }

  renderFinishHandler () {
    this.rendered++;
    if (this.rendered >= 10000) {
      this.timer = (new Date() - this.renderTime) / 1000;
    }
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App, FileItem, RenderItem ],
  bootstrap: [ App ]
})
export default class Ng2App {}
