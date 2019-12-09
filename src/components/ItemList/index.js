import React from 'react';

import styles from './styles.module.scss';

const ItemList = ({ data, onClick, isOpen, current }) => {
  const visibleItem = data.find(item => item.slug === current) || {label: ''};

  return isOpen ? data.map(item => (
    <li
      className={styles.ItemList}
      onClick={onClick(item.slug)}
      key={item.id}
    >
      {item.label}
    </li>
  )) : <li>{visibleItem.label}</li>;
}

export default ItemList;