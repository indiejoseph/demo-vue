import React from 'react';

import FileItem from './FileItem';
import RenderItem from './RenderItem';
import './styles/app.sass';
import logoImage from './images/react.png';

export default class ReactApp extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      fileSizes: [
        { name: 'react@15.3.2', size: 685 },
        { name: 'react-dom@15.3.2', size: 1.1 },
      ],
      renderItems: [],
      rendered: 0,
      renderTime: 0,
      timer: 0
    };
  }

  clickHandler () {
    this.rendered = 0;
    this.setState({
      renderTime: new Date(),
      renderItems: Array.apply(null, { length: 10000 }).map(Number.call, Number)
    });
  }

  renderFinishHandler () {
    this.rendered++;

    if (this.rendered >= 10000) {
      this.setState({
        timer: (new Date() - this.state.renderTime) / 1000
      });
    }
  }

  render () {
    const fileList = this.state.fileSizes.map(({ name, size }, i) => (
      <FileItem key={ 'fileItem-' + i } name={ name } size={ size } />
    ));

    const renderingList = this.state.renderItems.map(idx => (
      <RenderItem key={ idx } index={ idx } onFinish={ this.renderFinishHandler.bind(this) } />
    ));

    return (
      <div id="react-app">
        <header id="headline">
          <img src={ logoImage } width="120" />
        </header>
        <article id="file-size">
          <header>
            <h5>File Size</h5>
          </header>
          <ul>
            { fileList }
          </ul>
        </article>
        <article id="render">
          <header>
            <h5>Rendering</h5>
          </header>
          <button onClick={ this.clickHandler.bind(this) } className="button-primary">Test</button>
          <div className="render-timer">TIMER: { this.state.timer }s</div>
          <div className="render-item-container">
            { renderingList }
          </div>
        </article>
      </div>
    );
  }
}
