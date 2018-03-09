import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const rootEl = document.getElementById('root');

const render = (Component) => (
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>, rootEl)
);

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}

registerServiceWorker(App);
