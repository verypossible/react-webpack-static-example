import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Html from './js/components/Html'

if (typeof document !== 'undefined') {
  // Client render code goes here...
}

// Exported static site renderer:
export default function render(locals, callback) {
  var html = ReactDOMServer.renderToStaticMarkup(<Html />)
  callback(null, '<html>' + html)
}
