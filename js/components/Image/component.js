import React, { Component } from 'react'

export default class Image extends Component {
  render() {
    return (
      <section className={this.props.className}>
        <img src={this.props.file} />
      </section>
    )
  }
}
