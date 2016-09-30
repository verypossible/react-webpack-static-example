import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import {
  Router,
  useRouterHistory,
} from 'react-router'
import { createHashHistory } from 'history'

import Routes from './routes'
import template from './template'

// Client render (optional):
if (typeof document !== 'undefined') {
  const outlet = document.getElementById('content');

  ReactDOM.render(<Router  routes={Routes} />, outlet)
}

export default (locals, callback) => {
  const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

  var Html = require('./Html.js')
  var data = require('./data.js')

  var reactApp = {
    __html: ReactDOMServer.renderToString(<Router history={appHistory}>{Routes}</Router>)
  };

  var html = ReactDOMServer.renderToStaticMarkup(
    <Html title={data.title} reactApp={reactApp} />
  );
  callback(null, '<!DOCTYPE html>' + html);
}
