import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const data = [
  {
    _id: '5d5eab219b5d16b21e333c3b',
    age: 32,
    name: {
      first: 'Yvette',
      last: 'Nicholson',
    },
  },
  {
    _id: '5d5eab21cc8097a6469c006b',
    age: 28,
    name: {
      first: 'Sharp',
      last: 'Lowery',
    },
  },
  {
    _id: '5d5eab2188d44de80a173a8a',
    age: 38,
    name: {
      first: 'Chasity',
      last: 'Franco',
    },
  },
  {
    _id: '5d5eab2132d1656128fb627b',
    age: 21,
    name: {
      first: 'Inez',
      last: 'Mooney',
    },
  },
  {
    _id: '5d5eab2110f62d0369b2576d',
    age: 26,
    name: {
      first: 'Martha',
      last: 'Lawson',
    },
  },
];

ReactDOM.render(<App data={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
