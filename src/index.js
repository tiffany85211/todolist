import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import './index.css';

ReactDOM.render(
  <MuiThemeProvider>
    <TodoApp />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
