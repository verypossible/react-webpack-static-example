import React from 'react'
import { Link } from 'react-router'

export default class Links extends React.Component {
  render () {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    )
  }
}
