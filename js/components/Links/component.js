import React from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

export default class Links extends React.Component {
  render () {
    return (
      <nav className={styles.header}>
        <ul className={styles.linkList}>
          <li><Link className={styles.headerLink} to="/">Home</Link></li>
          <li><Link className={styles.headerLink} to="/about">About</Link></li>
        </ul>
      </nav>
    )
  }
}
