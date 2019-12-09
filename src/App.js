import React, { useState } from 'react';

import List from './components/List';
import Wrapper from './components/Wrapper';
import Content from './components/Content';

import styles from './styles.module.scss';

const App = () => {
  const [service, setService] = useState(null);
  const [brand, setBrand] = useState(null);
  const [style, setStyle] = useState(null);


  return (
    <div className={styles.App}>
      <Wrapper>
        <List label="Services" urlParam="terms" onClick={setService} current={service} />
        <List label="Brands" urlParam="brands_terms" onClick={setBrand} current={brand} />
        <List label="Styles" urlParam="styles" onClick={setStyle} current={style} />
      </Wrapper>
      <Content urlParam={{service, brand, style}} />
    </div>
  );
}

export default App;
