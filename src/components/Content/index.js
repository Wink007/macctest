import React, { useEffect, useState } from 'react';

import config from '../../config.json';

import styles from './styles.module.scss';

const Content = ({ urlParam }) => {
  const [data, setData] = useState('');

  const fetchContent = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    const { service, brand, style } = urlParam;
    window.history.pushState(null, null, `/s-${service}/b-${brand}/st-${style}`);
    fetchContent((`${config.baseApiUrl}parse_link?service_slug=${service}&brand_slug=${brand}&style_slug=${style}`));
  }, [urlParam]);

  return <code className={styles.Content}>{JSON.stringify(data)}</code>
}

export default Content;
