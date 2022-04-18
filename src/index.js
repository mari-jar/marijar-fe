import React from 'react';
import { render } from 'react-dom';
import 'typeface-roboto';
import App from './App';

render(<App />, document.getElementById('app'));

moduleHotAccept(module);

export function moduleHotAccept(mod) {
  if (mod.hot) {
    mod.hot.accept('./App', () => {
      const NewApp = require('./App').default;
      render(<NewApp />, document.getElementById('app'));
    });
  }
}
