import React from 'react'
import Links from '../../components/Links'
import Image from '../../components/Image'
import bigCat from './assets/big_cat.jpeg'
import styles from './styles.css'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Links />
        {this.props.children}
        <Image className={styles.imageSize} file={bigCat} />
      </div>
    )
  }
}

export default Main
