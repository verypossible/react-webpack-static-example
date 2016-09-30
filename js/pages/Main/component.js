import React from 'react'
import Links from '../../components/Links'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Links />
        {this.props.children}
      </div>
    )
  }
}

export default Main
