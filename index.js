
import React, { Component, PropTypes } from 'react'

export default class ClickOutside extends Component {
  static propTypes = {
    ignoreClassName: PropTypes.string,
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
    if (this.props.ignoreClassName && e.target.classList.contains(this.props.ignoreClassName)){
      return;
    }
    const { onClickOutside } = this.props
    const el = this.container
    if (!el.contains(e.target)) onClickOutside(e)
  };
}
