import React, { useState, useEffect } from 'react';

import ItemList from '../ItemList';
import config from '../../config.json';

import styles from './styles.module.scss';


const List = ({ urlParam, label, onClick, current }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ data, setData ] = useState([]);

  const fetchItems = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    setData(json.data);
  }

  useEffect(() => {
    fetchItems(`${config.baseApiUrl}${urlParam}`);
  }, [urlParam]);

  const onClickAndClose = (slug) => () => {
    onClick(slug);
    setIsOpen(false);
  }


  return (
      <div className={styles.List}>
        <span onClick={() => setIsOpen(!isOpen)}>{label}</span>
        <ul>
          <ItemList isOpen={isOpen} data={data} onClick={onClickAndClose} current={current} />
        </ul>
      </div>
    )
};

export default List;