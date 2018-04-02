import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from 'material-ui/styles';

import configureStore from '../../src/store';
import App from '../../src/components/App';

const sheetsRegistry = new SheetsRegistry();
const generateClassName = createGenerateClassName();

const path = require('path');
const fs = require('fs');

export default (req, res) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
  const context = {};
  const store = configureStore();

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    if (context.url) {
      res.redirect(context.url);
      return;
    }

    // render the app as a string
    /* eslint-disable-next-line */
    const html = ReactDOMServer.renderToString(
      <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </JssProvider>);

    const css = sheetsRegistry.toString();

    // inject the rendered app into our html and send it
    return res.end(htmlData.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>
    <script>window.INITIAL_STATE = ${JSON.stringify(store.getState()).replace(
    /</g,
    '\\u003c',
  )}</script>
    <style id="jss-server-side">${css}</style>
    `,
    ));
  });
};
