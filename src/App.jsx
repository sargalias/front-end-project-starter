import React from 'react';
import styles from './App.scss';

const App = () => (
  <div className={styles.App}>
    <h1 className={styles.App_heading}>App</h1>
    <p className={styles.App_text}>Text</p>
  </div>
);

// dynamic importing
import('./foo' /* webpackChunkName: "Foo" */ /* webpackPreload: true */).then(
  Foo => {
    console.log(`resolved foo with value: ${Foo.default}`); // eslint-disable-line
  },
);

export default App;
