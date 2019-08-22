import React from 'react';

import List from './components/List';

import './App.scss';

export default ({ data }) => {
  return (
    <div className="App">
      <header>
        <h1>List of items</h1>
      </header>
      <List items={data} />
    </div>
  );
};
