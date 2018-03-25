import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'typeface-roboto';
import './index.css';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

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
