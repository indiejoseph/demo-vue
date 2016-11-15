import './styles/app.sass';
import Vue from 'vue';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader } from '@angularclass/hmr';

import VueApp from './vue/app.vue';
import Ng2App from './ng2/app';
import ReactApp from './react/app';

document.addEventListener('DOMContentLoaded', event => {
  // VueJs
  new Vue({
    el: '#vue',
    render: h => h(VueApp)
  });

  // React
  ReactDOM.render(
    <AppContainer>
       <ReactApp />
    </AppContainer>,
    document.getElementById('react')
  );

  if (module.hot) {
    module.hot.accept('./react/app', () => {
      console.log(module.hot.accept);
      const ReactApp = require('./react/app').default;

      ReactDOM.render(
        <AppContainer>
           <ReactApp />
        </AppContainer>,
        document.getElementById('react')
      );
    });
  }

  // Angular2
  platformBrowserDynamic().bootstrapModule(Ng2App);
});
