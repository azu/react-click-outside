
import React, { Component, PropTypes } from 'react'

export default class ClickOutside extends Component {
  static propTypes = {
    ignoreName: PropTypes.func,
    onClickOutside: PropTypes.func.isRequired
  };

  render() {
    const { children, onClickOutside, ...props } = this.props
    return <div {...props} ref={ref => this.container = ref}>{children}</div>
  }

  componentDidMount() {
    document.addEventListener('click', this.handle, true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handle, true)
  }

  handle = e => {
    if (this.props.ignoreName && e.target.classList.contains(this.props.ignoreName)){
      return;
    }
    const { onClickOutside } = this.props
    const el = this.container
    if (!el.contains(e.target)) onClickOutside(e)
  };
}
