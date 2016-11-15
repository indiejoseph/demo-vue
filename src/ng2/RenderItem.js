import { Component } from '@angular/core';

@Component({
  selector: 'render-item',
  inputs: [ 'index', 'onFinish' ],
  template: '<div class="render-item">{{ index }}</div>'
})
export default class RenderItem {
  ngAfterViewChecked () {
    this.onFinish();
  }
}
