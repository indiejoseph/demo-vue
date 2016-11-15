import { Component } from '@angular/core';

@Component({
  selector: 'file-item',
  inputs: [ 'name', 'size' ],
  template: '<li><span class="dim">{{ name }}</span> - <b>{{ size }}kb</b></li>'
})
export default class FileItem {}
