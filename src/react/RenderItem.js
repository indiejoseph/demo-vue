import PureRenderMixin from 'react-addons-pure-render-mixin';
import React, { PropTypes } from 'react';

export default class RenderItem extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    onFinish: PropTypes.func.isRequired,
  };

  constructor (props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentDidMount () {
    this.props.onFinish();
  }

  render () {
    return (<div className="render-item">{ this.props.index }</div>);
  }
}
