import React from 'react'

import btn from './styles.css'

export default class Button extends React.Component {
  render () {
    return (
      <button className={btn.red}>{this.props.text}</button>
    )
  }
}
