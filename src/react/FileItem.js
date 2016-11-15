import PureRenderMixin from 'react-addons-pure-render-mixin';
import React, { PropTypes } from 'react';

export default class FileItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  };

  constructor (props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render () {
    return (
      <li>
        <span className="dim">
          { this.props.name }
        </span> - <b>{ this.props.size }kb</b>
      </li>
    );
  }
}
