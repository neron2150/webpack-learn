import React from 'react';

import styles from './styles.css';

const Loader = () => (
  <div className={styles.container}>
    <div className={styles.loader}>
      <span className={styles.animation} />
    </div>
  </div>
);

export default Loader;
