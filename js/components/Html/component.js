import React from 'react'
import styles from './styles.css'
import Button from '../Button'

type Props = {
  title: string,
  app: React.PropTypes.Component,
}

class Html extends React.Component {
  props: Props;

  render() {
    return (
      <html lang="en">
        <head><title>{this.props.title}</title></head>
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <body className="body">
          <div id="content">
            <p>oh hi.</p>
            <Button text="hello!" />
          </div>
          <script src="dist/index.js"></script>
        </body>
      </html>
    );
  }
}

 Html.defaultProps = {
  title: "oh boy"
 }

export default Html
