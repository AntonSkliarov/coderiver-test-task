import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './initialStyles/normalize.sass';
import './initialStyles/reset.sass';
import './initialStyles/fonts.sass';
import './mixins/mixins.sass';
import { App } from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
